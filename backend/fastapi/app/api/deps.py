from typing import Generator

from jose import jwt
from pydantic import ValidationError
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.core import security
from app.core.config import settings
from app.db.session import SessionLocal
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/login/access-token"
)


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def get_current_client(
    db: Session = Depends(get_db), token: str = Depends(reusable_oauth2)
) -> models.Client:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    client = crud.client.get(db, id=token_data.sub)
    if not client:
        raise HTTPException(status_code=404, detail="Client not found")
    return client


def get_current_active_client(
    current_client: models.Client = Depends(get_current_client),
) -> models.Client:
    if not crud.user.is_active(current_client):
        raise HTTPException(status_code=400, detail="Inactive client")
    return current_client


# def get_current_active_superuser(
#     current_user: models.User = Depends(get_current_user),
# ) -> models.User:
#     if not crud.user.is_superuser(current_user):
#         raise HTTPException(
#             status_code=400, detail="The user doesn't have enough privileges"
#         )
#     return current_user


def get_current_wealth_manager(
    db: Session = Depends(get_db), token: str = Depends(reusable_oauth2)
) -> models.Wealth_Manager:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    wealth_manager = crud.wealth_manager.get(db, id=token_data.sub)
    if not wealth_manager:
        raise HTTPException(status_code=404, detail="Wealth manager not found")
    return wealth_manager


def get_current_active_wealth_manager(
    current_wealth_manager: models.Wealth_Manager = Depends(get_current_wealth_manager),
) -> models.Wealth_Manager:
    if not crud.wealth_manager.is_active(current_wealth_manager):
        raise HTTPException(status_code=400, detail="Inactive wealth manager")
    return current_wealth_manager
