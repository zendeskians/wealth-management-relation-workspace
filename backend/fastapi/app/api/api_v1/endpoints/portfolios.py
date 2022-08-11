from typing import Any, List

from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from fastapi import APIRouter, Body, Depends, HTTPException

router = APIRouter()


@router.get("/client", response_model=List[schemas.Portfolio])
def get_current_client_portfolio(
    db: Session = Depends(deps.get_db),
    current_client: models.Client = Depends(deps.get_current_active_client),
) -> Any:
    """
    Get all portfolios of current client
    """
    portfolios = crud.portfolio.get_by_client_id(db, client_id=current_client.id)
    return portfolios


@router.get("/client/percentage_change_by_month")
def get_current_client_portfolio_percentage_change_by_month(
    db: Session = Depends(deps.get_db),
    current_client: models.Client = Depends(deps.get_current_active_client),
) -> Any:
    """
    Get portfolio percentage change of current client by month
    """
    portfolios = crud.portfolio.get_by_client_id(db, client_id=current_client.id)
    month_data = {}
    for portfolio in portfolios:
        if portfolio.month not in month_data:
            month_data[portfolio.month] = {"som": 0, "eom": 0}
        month_data[portfolio.month]["som"] += portfolio.value_at_som
        month_data[portfolio.month]["eom"] += portfolio.value_at_eom
    for month in month_data:
        month_data[month] = (
            month_data[month]["eom"] - month_data[month]["som"]
        ) / month_data[month]["som"]
    return month_data


@router.get("/wealth_manager/percentage_change_by_month")
def get_current_wealth_manager_portfolio_percentage_change_by_month(
    db: Session = Depends(deps.get_db),
    current_wealth_manager: models.Client = Depends(
        deps.get_current_active_wealth_manager
    ),
) -> Any:
    """
    Get portfolio percentage change of current wealth manager's clients by month
    """
    portfolios = crud.portfolio.get_by_wealth_manager_id(
        db, client_id=current_wealth_manager.id
    )
    client_data = {}
    for portfolio in portfolios:
        if portfolio.client_id not in client_data:
            client_data[portfolio.client_id] = {}
        if portfolio.month not in client_data[portfolio.client_id]:
            client_data[portfolio.client_id][portfolio.month] = {"som": 0, "eom": 0}
        client_data[portfolio.client_id][portfolio.month][
            "som"
        ] += portfolio.value_at_som
        client_data[portfolio.client_id][portfolio.month][
            "eom"
        ] += portfolio.value_at_eom
    for client in client_data:
        for month in client_data[client]:
            client_data[client][month] = (
                client_data[client][month]["eom"] - client_data[client][month]["som"]
            ) / client_data[client][month]["som"]
    return client_data


@router.get("/wealth_manager", response_model=List[schemas.Portfolio])
def get_current_wealth_manager_portfolio(
    db: Session = Depends(deps.get_db),
    current_wealth_manager: models.Client = Depends(
        deps.get_current_active_wealth_manager
    ),
) -> Any:
    """
    Get all portfolios of current wealth manager
    """
    portfolios = crud.portfolio.get_by_wealth_manager_id(
        db, client_id=current_wealth_manager.id
    )
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
