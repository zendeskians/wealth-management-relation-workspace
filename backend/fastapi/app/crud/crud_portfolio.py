from typing import Any, Dict, List, Optional, Union

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.portfolio import Portfolio
from app.schemas.portfolio import PortfolioCreate, PortfolioUpdate


class CRUDPortfolio(CRUDBase[Portfolio, PortfolioCreate, PortfolioUpdate]):
    def get_by_client_id(
        self, db: Session, *, client_id: int
    ) -> List[Optional[Portfolio]]:
        return (db.query(Portfolio).filter(Portfolio.client_id == client_id)).all()

    def get_by_id(self, db: Session, *, id: int) -> Optional[Portfolio]:
        return db.query(Portfolio).filter(Portfolio.id == id).first()

    def create(self, db: Session, *, obj_in: PortfolioCreate) -> Portfolio:
        db_obj = Portfolio(
            client_id=obj_in.client_id,
            wealth_manager_id=obj_in.wealth_manager_id,
            month=obj_in.month,
            financial_instrument=obj_in.financial_instrument,
            value_at_som=obj_in.value_at_som,
        )
        if obj_in.value_at_eom:
            db_obj.value_at_eom = obj_in.value_at_eom
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self,
        db: Session,
        *,
        db_obj: Portfolio,
        obj_in: Union[PortfolioUpdate, Dict[str, Any]],
    ) -> Portfolio:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        return super().update(db, db_obj=db_obj, obj_in=update_data)


portfolio = CRUDPortfolio(Portfolio)
