from datetime import date
from typing import Any, List
from xmlrpc.client import Boolean

from pydantic.networks import EmailStr
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api import deps
from fastapi import APIRouter, Body, Depends, HTTPException

router = APIRouter()


@router.get("/all", response_model=List[schemas.Wealth_Manager])
def get_all_wealth_managers(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    active_only: bool = True
    # current_user: models.Client = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve all wealth managers.
    """
    wealth_managers = crud.wealth_manager.get_multi(
        db, skip=skip, limit=limit, active_only=active_only
    )
    return wealth_managers


# @router.get("", response_model=schemas.Wealth_Manager)
# def get_wealth_manager(
#     db: Session = Depends(deps.get_db),
#     current_wealth_manager: models.wealth_manager = Depends(
#         deps.get_current_active_wealth_manager
#     ),
# ) -> Any:
#     """
#     Get current wealth manager.
#     """
#     return current_wealth_manager


@router.get("/{wealth_manager_id}", response_model=schemas.Wealth_Manager)
def get_wealth_manager_by_id(
    wealth_manager_id: int,
    # current_wealth_manager: models.Wealth_Manager = Depends(
    #     deps.get_current_active_wealth_manager
    # ),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific wealth manager by id.
    """
    wealth_manager = crud.wealth_manager.get(db, id=wealth_manager_id)
    # if wealth_manager == current_wealth_manager:
    #     return wealth_manager
    # if not crud.client.is_superuser(current_client):
    #     raise HTTPException(
    #         status_code=400, detail="The client doesn't have enough privileges"
    #     )
    return wealth_manager


@router.post("", response_model=schemas.Wealth_Manager)
def create_wealth_manager(
    *,
    db: Session = Depends(deps.get_db),
    username: str = Body(...),
    password: str = Body(...),
    email: EmailStr = Body(...),
    name: str = Body(None),
    dob: date = Body(None),
    address: str = Body(None),
) -> Any:
    """
    Create new wealth manager.
    """
    wealth_manager = crud.wealth_manager.get_by_username(db, username=username)
    if wealth_manager:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )
    wealth_manager = crud.wealth_manager.get_by_email(db, email=email)
    if wealth_manager:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    wealth_manager_in = schemas.Wealth_ManagerCreate(
        username=username,
        password=password,
        email=email,
        name=name,
        dob=dob,
        address=address,
    )
    wealth_manager = crud.wealth_manager.create(db, obj_in=wealth_manager_in)
    return wealth_manager


@router.put("/{wealth_manager_id}", response_model=schemas.Wealth_Manager)
def update_wealth_manager_by_id(
    *,
    db: Session = Depends(deps.get_db),
    wealth_manager_id: int,
    password: str = Body(None),
    name: str = Body(None),
    email: EmailStr = Body(None),
    dob: date = Body(None),
    address: str = Body(None),
    is_active: Boolean = Body(None),
) -> Any:
    """
    Update a wealth manager.
    """
    wealth_manager = crud.wealth_manager.get(db, id=wealth_manager_id)

    if not wealth_manager:
        raise HTTPException(
            status_code=404,
            detail="The wealth manager with this username does not exist in the system",
        )
    if email:
        check_existing_email = crud.wealth_manager.get_by_email(db, email=email)
        if check_existing_email:
            raise HTTPException(
                status_code=400,
                detail="The wealth manager with this email already exists in the system.",
            )
    wealth_manager_in = schemas.Wealth_ManagerCreate(
        username=wealth_manager.username,
        password=password,
        email=email,
        name=name,
        dob=dob,
        address=address,
        is_active=is_active,
    )
    wealth_manager = crud.wealth_manager.update(
        db, db_obj=wealth_manager, obj_in=wealth_manager_in
    )
    return wealth_manager


# @router.put("", response_model=schemas.Wealth_Manager)
# def update_wealth_manager(
#     *,
#     db: Session = Depends(deps.get_db),
#     password: str = Body(None),
#     name: str = Body(None),
#     email: EmailStr = Body(None),
#     dob: date = Body(None),
#     address: str = Body(None),
#     is_active: Boolean = Body(None),
#     current_wealth_manager: models.Wealth_Manager = Depends(
#         deps.get_current_active_wealth_manager
#     ),
# ) -> Any:
#     """
#     Update own wealth manager.
#     """
#     current_wealth_manager_data = jsonable_encoder(current_wealth_manager)
#     wealth_manager_in = schemas.WealthManagerUpdate(**current_wealth_manager_data)
#     if email:
#         check_existing_email = crud.wealth_manager.get_by_email(db, email=email)
#         if check_existing_email:
#             raise HTTPException(
#                 status_code=400,
#                 detail="The user with this email already exists in the system.",
#             )
#         wealth_manager_in.email = email
#     if password:
#         wealth_manager_in.password = password
#     if name:
#         wealth_manager_in.name = name
#     if dob:
#         wealth_manager_in.dob = dob
#     if address:
#         wealth_manager_in.address = address
#     if is_active:
#         wealth_manager_in.is_active = is_active
#     wealth_manager = crud.wealth_manager.update(
#         db, db_obj=current_wealth_manager, obj_in=wealth_manager_in
#     )
#     return wealth_manager


# @router.post("/new", response_model=schemas.Wealth_Manager)
# def create_wealth_manager_unlogged(
#     *,
#     db: Session = Depends(deps.get_db),
#     username: str = Body(...),
#     password: str = Body(...),
#     email: EmailStr = Body(...),
#     name: str = Body(None),
#     dob: date = Body(None),
#     address: str = Body(None),
# ) -> Any:
#     """
#     Create new wealth manager without the need to be logged in.
#     """
#     if not settings.USERS_OPEN_REGISTRATION:
#         raise HTTPException(
#             status_code=403,
#             detail="Open wealth manager registration is forbidden on this server",
#         )
#     wealth_manager = crud.wealth_manager.get_by_username(db, username=username)
#     if wealth_manager:
#         raise HTTPException(
#             status_code=400,
#             detail="The wealth manager with this username already exists in the system",
#         )
#     wealth_manager = crud.wealth_manager.get_by_email(db, email=email)
#     if wealth_manager:
#         raise HTTPException(
#             status_code=400,
#             detail="The wealth manager with this email already exists in the system",
#         )
#     wealth_manager_in = schemas.Wealth_ManagerCreate(
#         username=username,
#         password=password,
#         email=email,
#         name=name,
#         dob=dob,
#         address=address,
#     )
#     wealth_manager = crud.wealth_manager.create(db, obj_in=wealth_manager_in)
#     return wealth_manager
