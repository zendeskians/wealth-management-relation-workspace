from datetime import datetime
from typing import Any, Dict, List, Optional, Union

from sqlalchemy.orm import Session

from app import crud
from app.core.security import get_password_hash, verify_password
from app.crud.base import CRUDBase
from app.models.client import Client
from app.schemas.client import ClientCreate, ClientUpdate
from fastapi import HTTPException


class CRUDClient(CRUDBase[Client, ClientCreate, ClientUpdate]):
    def get_by_email(self, db: Session, *, email: str) -> Optional[Client]:
        return db.query(Client).filter(Client.email == email).first()

    def get_by_username(self, db: Session, *, username: str) -> Optional[Client]:
        return db.query(Client).filter(Client.username == username).first()

    def get_by_id(self, db: Session, *, id: int) -> Optional[Client]:
        return db.query(Client).filter(Client.id == id).first()

    def get_by_wealth_manager(
        self, db: Session, *, wealth_manager_id: int
    ) -> Optional[List[Client]]:
        return (
            db.query(Client).filter(Client.wealth_manager_id == wealth_manager_id).all()
        )

    def create(self, db: Session, *, obj_in: ClientCreate) -> Client:
        db_obj = Client(
            username=obj_in.username,
            password=get_password_hash(obj_in.password),
            email=obj_in.email,
            name=obj_in.name,
            dob=obj_in.dob,
            address=obj_in.address,
            is_active=1,
            wealth_manager_id=obj_in.wealth_manager_id,
        )
        db_obj.created_at = datetime.now()
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self,
        db: Session,
        *,
        db_obj: Client,
        obj_in: Union[ClientUpdate, Dict[str, Any]],
    ) -> Client:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        if update_data["password"]:
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["hashed_password"] = hashed_password
        if update_data["wealth_manager_id"]:
            wealth_manager = crud.wealth_manager.get_by_id(
                db, id=update_data["wealth_manager_id"]
            )
            print(wealth_manager)
            if not wealth_manager:
                raise HTTPException(
                    status_code=404,
                    detail=f"The wealth manager with this id [{update_data['wealth_manager_id']}] does not exist in the system",
                )
        update_data["updated_at"] = datetime.now()
        return super().update(db, db_obj=db_obj, obj_in=update_data)

    def authenticate(
        self, db: Session, *, email: str, password: str
    ) -> Optional[Client]:
        client = self.get_by_email(db, email=email)
        if not client:
            return None
        if not verify_password(password, client.hashed_password):
            return None
        return client

    def is_active(self, user: Client) -> bool:
        return client.is_active


client = CRUDClient(Client)
