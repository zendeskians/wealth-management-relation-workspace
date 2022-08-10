from datetime import timedelta
from typing import Any

from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from app.core import security
from app.core.config import settings
from app.core.security import get_password_hash
from app.utils import verify_password_reset_token
from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()


class CustomOAuth2PasswordRequestForm(OAuth2PasswordRequestForm):
    def __init__(
        self,
        grant_type: str = Form(None, regex="password"),
        username: str = Form(...),
        password: str = Form(...),
        user_type: str = Form(...),
        scope: str = Form(""),
        client_id: Optional[str] = Form(None),
        client_secret: Optional[str] = Form(None),
    ):
        self.grant_type = grant_type
        self.username = username
        self.password = password
        self.scopes = scope.split()
        self.client_id = client_id
        self.client_secret = client_secret
        self.user_type = user_type


@router.post("/login/access-token", response_model=schemas.Token)
def login_access_token(
    db: Session = Depends(deps.get_db),
    form_data: CustomOAuth2PasswordRequestForm = Depends(),
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    user_type = form_data.user_type
    if user_type not in ("client", "wealth_manager"):
        raise HTTPException(status_code=400, detail="Invalid user type")
    crud_class = getattr(crud, user_type)
    oauth_client = crud_class.authenticate(
        db, username=form_data.username, password=form_data.password
    )

    if not oauth_client:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not crud_class.is_active(oauth_client):
        raise HTTPException(status_code=400, detail=f"Inactive {crud_class}")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            oauth_client.id, user_type, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


@router.post("/login/test-token", response_model=schemas.Client)
def test_token(current_client: models.Client = Depends(deps.get_current_client)) -> Any:
    """
    Test access token
    """
    return current_client


# @router.post("/password-recovery/{email}", response_model=schemas.Msg)
# def recover_password(email: str, db: Session = Depends(deps.get_db)) -> Any:
#     """
#     Password Recovery
#     """
#     client = crud.client.get_by_email(db, email=email)

#     if not client:
#         raise HTTPException(
#             status_code=404,
#             detail="The client with this username does not exist in the system.",
#         )
#     password_reset_token = generate_password_reset_token(email=email)
#     send_reset_password_email(
#         email_to=client.email, email=email, token=password_reset_token
#     )
#     return {"msg": "Password recovery email sent"}


@router.post("/reset-password/", response_model=schemas.Msg)
def reset_password(
    token: str = Body(...),
    new_password: str = Body(...),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Reset password
    """
    token_id = verify_password_reset_token(token)
    print(token_id)
    if not token_id:
        raise HTTPException(status_code=400, detail="Invalid token")
    id = token_id["id"]
    user_type = token_id["user_type"]
    print(user_type)
    crud_class = getattr(crud, user_type)
    user = crud_class.get_by_id(db, id=id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail=f"The {user_type} with this username does not exist in the system.",
        )
    elif not crud_class.is_active(user):
        raise HTTPException(status_code=400, detail="Inactive client")
    hashed_password = get_password_hash(new_password)
    user.password = hashed_password
    db.add(user)
    db.commit()
    return {"msg": "Password updated successfully"}
