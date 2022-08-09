from datetime import date
from typing import Any, List
from xmlrpc.client import Boolean

from pydantic.networks import EmailStr
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api import deps
from app.core.config import settings
from fastapi import APIRouter, Body, Depends, HTTPException

router = APIRouter()


@router.get("/all", response_model=List[schemas.Client])
def get_all_clients(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    active_only: bool = True,
    # current_user: models.Client = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve all clients.
    """
    clients = crud.client.get_multi(db, skip=skip, limit=limit, active_only=active_only)
    return clients


# @router.get("", response_model=schemas.Client)
# def get_client(
#     db: Session = Depends(deps.get_db),
#     current_client: models.Client = Depends(deps.get_current_active_client),
# ) -> Any:
#     """
#     Get current client.
#     """
#     return current_client


@router.get("/{client_id}", response_model=schemas.Client)
def get_client_by_id(
    client_id: int,
    # current_client: models.Client = Depends(deps.get_current_active_client),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific client by id.
    """
    client = crud.client.get(db, id=client_id)
    # if client == current_client:
    #     return client
    # if not crud.client.is_superuser(current_client):
    #     raise HTTPException(
    #         status_code=400, detail="The client doesn't have enough privileges"
    #     )
    return client


@router.get("/wealth_manager/{wealth_manager_id}", response_model=List[schemas.Client])
def get_all_clients_by_wealth_manager(
    wealth_manager_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get all clients of a specific wealth manager
    """
    clients = crud.client.get_by_wealth_manager(db, wealth_manager_id=wealth_manager_id)
    return clients


@router.post("", response_model=schemas.Client)
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
        username=username,
        password=password,
        email=email,
        name=name,
        dob=dob,
        address=address,
        wealth_manager_id=wealth_manager_id,
    )
    client = crud.client.create(db, obj_in=client_in)
    return client


@router.put("/{client_id}", response_model=schemas.Client)
def update_client_by_id(
    *,
    db: Session = Depends(deps.get_db),
    client_id: int,
    password: str = Body(None),
    name: str = Body(None),
    email: EmailStr = Body(None),
    dob: date = Body(None),
    address: str = Body(None),
    is_active: Boolean = Body(None),
    wealth_manager_id: int = Body(None),
    # client_in: schemas.ClientUpdate,
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
    if email:
        check_existing_email = crud.wealth_manager.get_by_email(db, email=email)
        if check_existing_email:
            raise HTTPException(
                status_code=400,
                detail="The client with this email already exists in the system.",
            )
    if is_active == None:
        is_active = client.is_active
    client_in = schemas.ClientCreate(
        username=client.username,
        password=password or client.password,
        email=email or client.email,
        name=name or client.name,
        dob=dob or client.dob,
        address=address or client.address,
        is_active=is_active,
        wealth_manager_id=wealth_manager_id or client.wealth_manager_id,
    )
    client = crud.client.update(db, db_obj=client, obj_in=client_in)
    return client


# @router.put("", response_model=schemas.Client)
# def update_client(
#     *,
#     db: Session = Depends(deps.get_db),
#     username: str = Body(None),
#     password: str = Body(None),
#     name: str = Body(None),
#     email: EmailStr = Body(None),
#     dob: date = Body(None),
#     address: str = Body(None),
#     is_active: Boolean = Body(None),
#     wealth_manager_id: int = Body(None),
#     current_client: models.Client = Depends(deps.get_current_active_client),
# ) -> Any:
#     """
#     Update own client.
#     """
#     current_client_data = jsonable_encoder(current_client)
#     client_in = schemas.ClientUpdate(**current_client_data)
#     if password is not None:
#         client_in.password = password
#     if name is not None:
#         client_in.name = name
#     if email is not None:
#         client_in.email = email
#     user = crud.user.update(db, db_obj=current_client, obj_in=client_in)
#     return user
