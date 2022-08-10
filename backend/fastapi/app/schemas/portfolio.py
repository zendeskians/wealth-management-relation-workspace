from datetime import date
from typing import Optional

from pydantic import BaseModel


# Shared properties
class PortfolioBase(BaseModel):
    id: Optional[int]
    client_id: int
    wealth_manager_id: Optional[int] = None
    date: date
    financial_instrument: str
    value_at_sod: float
    value_at_eod: Optional[float]


# Properties to receive via API on creation
class PortfolioCreate(PortfolioBase):
    pass


# Properties to receive via API on update
class PortfolioUpdate(PortfolioBase):
    pass


class PortfolioInDBBase(PortfolioBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class Portfolio(PortfolioInDBBase):
    pass


# # Additional properties stored in DB
class PortfolioInDB(PortfolioInDBBase):
    pass
