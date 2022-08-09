from datetime import date
from typing import Any, List
from xmlrpc.client import Boolean

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic.networks import EmailStr
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from app.core.config import settings
from app.utils import send_new_account_email

router = APIRouter()


@router.get("/all", response_model=List[schemas.Client])
def get_all_clients(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    # current_user: models.Client = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve all clients.
    """
    clients = crud.client.get_multi(db, skip=skip, limit=limit)
    return clients


# @router.post("", response_model=schemas.Client)
# def create_client(
#     *,
#     db: Session = Depends(deps.get_db),
#     client_in: schemas.ClientCreate,
#     # current_user: models.User = Depends(deps.get_current_active_superuser),
# ) -> Any:
#     """
#     Create new client.
#     """
#     client = crud.client.get_by_username(db, username=client_in.username)
#     if client:
#         raise HTTPException(
#             status_code=400,
#             detail="The user with this username already exists in the system.",
#         )
#     client = crud.client.create(db, obj_in=client_in)
#     # if settings.EMAILS_ENABLED and client_in.email:
#     #     send_new_account_email(
#     #         email_to=client_in.email, username=client_in.email, password=client_in.password
#     #     )
#     return client


@router.put("", response_model=schemas.Client)
def update_client(
    *,
    db: Session = Depends(deps.get_db),
    username: str = Body(None),
    password: str = Body(None),
    name: str = Body(None),
    email: EmailStr = Body(None),
    dob: date = Body(None),
    address: str = Body(None),
    is_active: Boolean = Body(None),
    wealth_manager_id: int = Body(None),
    current_client: models.Client = Depends(deps.get_current_active_client),
) -> Any:
    """
    Update own client.
    """
    current_client_data = jsonable_encoder(current_client)
    client_in = schemas.ClientUpdate(**current_client_data)
    if password is not None:
        client_in.password = password
    if name is not None:
        client_in.name = name
    if email is not None:
        client_in.email = email
    user = crud.user.update(db, db_obj=current_client, obj_in=client_in)
    return user


@router.get("", response_model=schemas.Client)
def get_client(
    db: Session = Depends(deps.get_db),
    current_client: models.Client = Depends(deps.get_current_active_client),
) -> Any:
    """
    Get current client.
    """
    return current_client


@router.post("/new", response_model=schemas.Client)
def create_client(
    *,
    db: Session = Depends(deps.get_db),
    username: str = Body(...),
    password: str = Body(...),
    email: EmailStr = Body(...),
    name: str = Body(None),
    dob: date = Body(None),
    address: str = Body(None),
    wealth_manager_id: int = Body(None),
) -> Any:
    """
    Create new client without the need to be logged in.
    """
    if not settings.USERS_OPEN_REGISTRATION:
        raise HTTPException(
            status_code=403,
            detail="Open client registration is forbidden on this server",
        )
    client = crud.client.get_by_username(db, username=username)
    if client:
        raise HTTPException(
            status_code=400,
            detail="The client with this username already exists in the system",
        )
    client = crud.client.get_by_email(db, email=email)
    if client:
        raise HTTPException(
            status_code=400,
            detail="The client with this email already exists in the system",
        )
    client_in = schemas.ClientCreate(
        username=username, password=password, email=email, name=name, dob=dob, address=address, wealth_manager_id=wealth_manager_id)
    client = crud.client.create(db, obj_in=client_in)
    client.password = "********"
    return client


@router.get("/{client_id}", response_model=schemas.Client)
def get_client_by_id(
    user_id: int,
    current_client: models.Client = Depends(deps.get_current_active_client),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific client by id.
    """
    client = crud.client.get(db, id=user_id)
    if client == current_client:
        return client
    # if not crud.client.is_superuser(current_client):
    #     raise HTTPException(
    #         status_code=400, detail="The client doesn't have enough privileges"
    #     )
    return client


@router.put("/{client_id}", response_model=schemas.Client)
def update_client(
    *,
    db: Session = Depends(deps.get_db),
    client_id: int,
    client_in: schemas.ClientUpdate,
    # current_user: models.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Update a client.
    """
    client = crud.client.get(db, id=client_id)
    if not client:
        raise HTTPException(
            status_code=404,
            detail="The client with this username does not exist in the system",
        )
    client = crud.client.update(db, db_obj=client, obj_in=client_in)
    return client
