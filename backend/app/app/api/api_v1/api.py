from fastapi import APIRouter

from app.api.api_v1.endpoints import login, clients, wealth_managers

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(clients.router, prefix="/client", tags=["users"])
api_router.include_router(wealth_managers.router, prefix="/wealth_manager", tags=["wealth_manager"])
