from app.api.api_v1.endpoints import clients, login, wealth_managers
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(clients.router, prefix="/client", tags=["client"])
api_router.include_router(
    wealth_managers.router, prefix="/wealth_manager", tags=["wealth_manager"]
)
