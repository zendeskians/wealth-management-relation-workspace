from sqlalchemy import Column, Float, Integer, String

from app.db.base_class import Base


class Portfolio(Base):
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, nullable=False)
    wealth_manager_id = Column(Integer, nullable=False)
    month = Column(String, nullable=False)
    financial_instrument = Column(String, nullable=False)
    value_at_som = Column(Float, nullable=False)
    value_at_eom = Column(Float)
