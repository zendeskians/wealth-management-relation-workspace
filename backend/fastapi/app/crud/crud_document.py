from datetime import datetime
from typing import Any, Dict, List, Optional, Union

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.document import Document
from app.schemas.document import DocumentCreate, DocumentUpdate


class CRUDDocument(CRUDBase[Document, DocumentCreate, DocumentUpdate]):
    def get_by_client_id(
        self, db: Session, *, client_id: int
    ) -> List[Optional[Document]]:
        return (db.query(Document).filter(Document.client_id == client_id)).all()

    def get_by_wealth_manager_id(
        self, db: Session, *, wealth_manager_id: int
    ) -> List[Optional[Document]]:
        return (
            db.query(Document).filter(Document.wealth_manager_id == wealth_manager_id)
        ).all()

    def get_by_client_and_wealth_manager_id(
        self, db: Session, *, client_id: int, wealth_manager_id: int
    ) -> List[Optional[Document]]:
        return (
            db.query(Document)
            .filter(Document.client_id == client_id)
            .filter(Document.wealth_manager_id == wealth_manager_id)
        ).all()

    def get_by_id(self, db: Session, *, id: int) -> Optional[Document]:
        return db.query(Document).filter(Document.id == id).first()

    def create(self, db: Session, *, obj_in: DocumentCreate) -> Document:
        db_obj = Document(
            client_id=obj_in.client_id,
            wealth_manager_id=obj_in.wealth_manager_id,
            document_name=obj_in.document_name,
            document_description=obj_in.document_description,
        )
        if obj_in.docusign_url:
            db_obj.docusign_url = obj_in.docusign_url
        db_obj.created_at = datetime.now()
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self,
        db: Session,
        *,
        db_obj: Document,
        obj_in: Union[DocumentUpdate, Dict[str, Any]],
    ) -> Document:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        update_data["updated_at"] = datetime.now()
        return super().update(db, db_obj=db_obj, obj_in=update_data)


document = CRUDDocument(Document)
