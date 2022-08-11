from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, validator


# Shared properties
class Wealth_ManagerBase(BaseModel):
    id: Optional[int]
    username: str
    email: Optional[EmailStr] = None
    name: str
    dob: date
    address: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    is_active: Optional[bool] = True

    @validator("dob", pre=True)
    def parse_dob(cls, value):
        if isinstance(value, date):
            return value
        return datetime.strptime(value, "%Y-%m-%d").date()


# Properties to receive via API on creation
class Wealth_ManagerCreate(Wealth_ManagerBase):
    password: str


# Properties to receive via API on update
class Wealth_ManagerUpdate(Wealth_ManagerBase):
    password: Optional[str] = None


class Wealth_ManagerInDBBase(Wealth_ManagerBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class Wealth_Manager(Wealth_ManagerInDBBase):
    pass


# # Additional properties stored in DB
class Wealth_ManagerInDB(Wealth_ManagerInDBBase):
    password: str
