from sqlalchemy import Boolean, Column, DateTime, Integer, String

from app.db.base_class import Base


class Document(Base):
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, nullable=False)
    wealth_manager_id = Column(Integer, nullable=False)
    document_id = Column(Integer, nullable=False)
    docusign_url = Column(String, default=None)
    signed = Column(Boolean, default=False)
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime)
