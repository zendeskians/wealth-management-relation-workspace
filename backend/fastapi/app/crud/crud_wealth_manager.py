from datetime import datetime
from typing import Any, Dict, Optional, Union

from sqlalchemy.orm import Session

from app.core.security import get_password_hash, verify_password
from app.crud.base import CRUDBase
from app.models.wealth_manager import Wealth_Manager
from app.schemas.wealth_manager import Wealth_ManagerCreate, Wealth_ManagerUpdate


class CRUDWealthManager(
    CRUDBase[Wealth_Manager, Wealth_ManagerCreate, Wealth_ManagerUpdate]
):
    def get_by_email(self, db: Session, *, email: str) -> Optional[Wealth_Manager]:
        return db.query(Wealth_Manager).filter(Wealth_Manager.email == email).first()

    def get_by_username(
        self, db: Session, *, username: str
    ) -> Optional[Wealth_Manager]:
        return (
            db.query(Wealth_Manager).filter(Wealth_Manager.username == username).first()
        )

    def get_by_id(self, db: Session, *, id: int) -> Optional[Wealth_Manager]:
        return db.query(Wealth_Manager).filter(Wealth_Manager.id == id).first()

    def create(self, db: Session, *, obj_in: Wealth_ManagerCreate) -> Wealth_Manager:
        db_obj = Wealth_Manager(
            username=obj_in.username,
            password=get_password_hash(obj_in.password),
            email=obj_in.email,
            name=obj_in.name,
            dob=obj_in.dob,
            address=obj_in.address,
            is_active=1,
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
        db_obj: Wealth_Manager,
        obj_in: Union[Wealth_Manager, Dict[str, Any]]
    ) -> Wealth_Manager:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        if update_data["password"]:
            hashed_password = get_password_hash(update_data["password"])
            print(hashed_password)
            del update_data["password"]
            update_data["password"] = hashed_password
        update_data["updated_at"] = datetime.now()
        return super().update(db, db_obj=db_obj, obj_in=update_data)

    def authenticate(
        self, db: Session, *, email: str, password: str
    ) -> Optional[Wealth_Manager]:
        wealth_manager = self.get_by_email(db, email=email)
        if not wealth_manager:
            return None
        if not verify_password(password, wealth_manager.hashed_password):
            return None
        return wealth_manager

    def is_active(self, user: Wealth_Manager) -> bool:
        return wealth_manager.is_active


wealth_manager = CRUDWealthManager(Wealth_Manager)
