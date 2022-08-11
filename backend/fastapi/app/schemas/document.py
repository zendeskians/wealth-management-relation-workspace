from datetime import datetime
from typing import Optional

from pydantic import BaseModel


# Shared properties
class DocumentBase(BaseModel):
    id: Optional[int]
    client_id: int
    wealth_manager_id: int
    document_id: int
    docusign_url: Optional[str] = None
    signed: Optional[bool] = False
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


# Properties to receive via API on creation
class DocumentCreate(DocumentBase):
    pass


# Properties to receive via API on update
class DocumentUpdate(DocumentBase):
    pass


class DocumentInDBBase(DocumentBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class Document(DocumentInDBBase):
    pass


# # Additional properties stored in DB
class DocumentInDB(DocumentInDBBase):
    pass
