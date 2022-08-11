from typing import Any, List

from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from fastapi import APIRouter, Body, Depends, HTTPException

router = APIRouter()


@router.get("", response_model=List[schemas.Portfolio])
def get_current_client_portfolio(
    db: Session = Depends(deps.get_db),
    current_client: models.Client = Depends(deps.get_current_active_client),
) -> Any:
    """
    Get all portfolios of current client
    """
    portfolios = crud.portfolio.get_by_client_id(db, client_id=current_client.id)
    return portfolios


@router.get("/all", response_model=List[schemas.Portfolio])
def get_all_portfolios(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve all portfolios.
    """
    portfolios = crud.portfolio.get_multi(db, skip=skip, limit=limit)
    return portfolios


@router.get("/{portfolio_id}", response_model=schemas.Portfolio)
def get_portfolio_by_id(
    portfolio_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific portfolio by id.
    """
    portfolio = crud.portfolio.get(db, id=portfolio_id)
    return portfolio


@router.get("/client/{client_id}", response_model=List[schemas.Portfolio])
def get_all_portfolios_by_client(
    client_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get all portfolios of a specific client
    """
    portfolios = crud.portfolio.get_by_client_id(db, client_id=client_id)
    return portfolios


@router.post("", response_model=schemas.Portfolio)
def create_portfolio(
    *,
    db: Session = Depends(deps.get_db),
    client_id: int = Body(...),
    wealth_manager_id: int = Body(...),
    month: str = Body(...),
    financial_instrument: str = Body(...),
    value_at_som: float = Body(...),
    value_at_eom: float = Body(None),
) -> Any:
    """
    Create new portfolio
    """
    client = crud.client.get_by_id(db, id=client_id)
    if not client:
        raise HTTPException(
            status_code=400,
            detail="The client with this id does not exist in the system",
        )
    wealth_manager = crud.wealth_manager.get_by_id(db, id=wealth_manager_id)
    if not wealth_manager:
        raise HTTPException(
            status_code=400,
            detail="The wealth manager with this id does not exist in the system",
        )
    portfolio_in = schemas.PortfolioCreate(
        client_id=client_id,
        wealth_manager_id=wealth_manager_id,
        month=month,
        financial_instrument=financial_instrument,
        value_at_som=value_at_som,
        value_at_eom=value_at_eom,
    )
    portfolio = crud.portfolio.create(db, obj_in=portfolio_in)
    return portfolio


@router.put("/{portfolio_id}", response_model=schemas.Portfolio)
def update_portfolio_by_id(
    portfolio_id: int,
    *,
    db: Session = Depends(deps.get_db),
    wealth_manager_id: int = Body(None),
    value_at_som: float = Body(None),
    value_at_eom: float = Body(None),
) -> Any:
    """
    Update a portfolio.
    """
    portfolio = crud.portfolio.get(db, id=portfolio_id)
    if not portfolio:
        raise HTTPException(
            status_code=404,
            detail="The portfolio with this id does not exist in the system",
        )
    portfolio_in = schemas.PortfolioCreate(
        client_id=portfolio.client_id,
        wealth_manager_id=wealth_manager_id or portfolio.wealth_manager_id,
        month=portfolio.month,
        financial_instrument=portfolio.financial_instrument,
        value_at_som=value_at_som or portfolio.value_at_som,
        value_at_eom=value_at_eom or portfolio.value_at_eom,
    )
    portfolio = crud.portfolio.update(db, db_obj=portfolio, obj_in=portfolio_in)
    return portfolio
