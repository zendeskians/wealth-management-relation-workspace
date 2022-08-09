from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, validator


# Shared properties
class ClientBase(BaseModel):
    id: Optional[int]
    username: str
    email: Optional[EmailStr] = None
    name: str
    dob: date
    address: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    is_active: Optional[bool] = True
    wealth_manager_id: Optional[int] = None

    @validator("dob", pre=True)
    def parse_dob(cls, value):
        if isinstance(value, date):
            return value
        return datetime.strptime(value, "%Y-%m-%d").date()


# Properties to receive via API on creation
class ClientCreate(ClientBase):
    password: str


# Properties to receive via API on update
class ClientUpdate(ClientBase):
    password: Optional[str] = None


class ClientInDBBase(ClientBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class Client(ClientInDBBase):
    pass


# # Additional properties stored in DB
class ClientInDB(ClientInDBBase):
    password: str
