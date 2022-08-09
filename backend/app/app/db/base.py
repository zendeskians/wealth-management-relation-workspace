# Import all the models, so that Base has them before being
# imported by Alembic
from app.db.base_class import Base  # noqa
from app.models.client import Client  # noqa
from app.models.wealth_manager import Wealth_Manager  # noqa
