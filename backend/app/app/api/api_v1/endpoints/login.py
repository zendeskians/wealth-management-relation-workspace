from datetime import timedelta
from typing import Any

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from app.core import security
from app.core.config import settings
from app.core.security import get_password_hash
from app.utils import (
    generate_password_reset_token,
    send_reset_password_email,
    verify_password_reset_token,
)

router = APIRouter()


@router.post("/login/access-token", response_model=schemas.Token)
def login_access_token(
    db: Session = Depends(deps.get_db), form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    client = crud.client.authenticate(
        db, email=form_data.username, password=form_data.password
    )
    if not client:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not crud.client.is_active(client):
        raise HTTPException(status_code=400, detail="Inactive client")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            client.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


@router.post("/login/test-token", response_model=schemas.Client)
def test_token(current_client: models.Client = Depends(deps.get_current_client)) -> Any:
    """
    Test access token
    """
    return current_client


@router.post("/password-recovery/{email}", response_model=schemas.Msg)
def recover_password(email: str, db: Session = Depends(deps.get_db)) -> Any:
    """
    Password Recovery
    """
    client = crud.client.get_by_email(db, email=email)

    if not client:
        raise HTTPException(
            status_code=404,
            detail="The client with this username does not exist in the system.",
        )
    password_reset_token = generate_password_reset_token(email=email)
    send_reset_password_email(
        email_to=client.email, email=email, token=password_reset_token
    )
    return {"msg": "Password recovery email sent"}


@router.post("/reset-password/", response_model=schemas.Msg)
def reset_password(
    token: str = Body(...),
    new_password: str = Body(...),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Reset password
    """
    email = verify_password_reset_token(token)
    if not email:
        raise HTTPException(status_code=400, detail="Invalid token")
    client = crud.client.get_by_email(db, email=email)
    if not client:
        raise HTTPException(
            status_code=404,
            detail="The client with this username does not exist in the system.",
        )
    elif not crud.client.is_active(client):
        raise HTTPException(status_code=400, detail="Inactive client")
    hashed_password = get_password_hash(new_password)
    client.hashed_password = hashed_password
    db.add(client)
    db.commit()
    return {"msg": "Password updated successfully"}
