from sqlalchemy import Column, Date, Float, Integer, String

from app.db.base_class import Base


class Portfolio(Base):
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, nullable=False)
    wealth_manager_id = Column(Integer, nullable=False)
    date = Column(Date, nullable=False)
    financial_instrument = Column(String, nullable=False)
    value_at_sod = Column(Float, nullable=False)
    value_at_eod = Column(Float)
