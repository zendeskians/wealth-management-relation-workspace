from typing import Any, List

from sqlalchemy.orm import Session

from app import crud, schemas
from app.api import deps
from fastapi import APIRouter, Body, Depends, HTTPException

router = APIRouter()


@router.get("/all", response_model=List[schemas.Document])
def get_all_documents(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve all documents.
    """
    documents = crud.document.get_multi(db, skip=skip, limit=limit)
    return documents


@router.get("/{document_id}", response_model=schemas.Document)
def get_document_by_id(
    document_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific document by id.
    """
    document = crud.document.get(db, id=document_id)
    return document


@router.get("/client/{client_id}", response_model=List[schemas.Document])
def get_all_documents_by_client(
    client_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get all documents of a specific client
    """
    documents = crud.document.get_by_client_id(db, client_id=client_id)
    return documents


@router.get(
    "/wealth_manager/{wealth_manager_id}", response_model=List[schemas.Document]
)
def get_all_documents_by_client(
    wealth_manager_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get all documents of a specific wealth manager
    """
    documents = crud.document.get_by_wealth_manager_id(
        db, wealth_manager_id=wealth_manager_id
    )
    return documents


@router.get(
    "/client/{client}/wealth_manager/{wealth_manager_id}",
    response_model=List[schemas.Document],
)
def get_all_documents_by_client_and_wealth_manager(
    client_id: int,
    wealth_manager_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get all documents of a specific client and wealth manager
    """
    documents = crud.document.get_by_client_and_wealth_manager_id(
        db, client_id=client_id, wealth_manager_id=wealth_manager_id
    )
    return documents


@router.post("", response_model=schemas.Document)
def create_document(
    *,
    db: Session = Depends(deps.get_db),
    client_id: int = Body(...),
    wealth_manager_id: int = Body(...),
    document_name: str = Body(...),
    description: str = Body(...),
) -> Any:
    """
    Create new document
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
    document_in = schemas.DocumentCreate(
        client_id=client_id,
        wealth_manager_id=wealth_manager_id,
        document_name=document_name,
        description=description,
    )
    document = crud.document.create(db, obj_in=document_in)
    return document


@router.put("/{document_id}", response_model=schemas.Document)
def update_document_by_id(
    document_id: int,
    *,
    db: Session = Depends(deps.get_db),
    document_name: str = Body(None),
    description: str = Body(None),
    docusign_url: int = Body(None),
    signed: bool = Body(None),
) -> Any:
    """
    Update a document.
    """
    document = crud.document.get(db, id=document_id)
    if not document:
        raise HTTPException(
            status_code=404,
            detail="The document with this id does not exist in the system",
        )
    document_in = schemas.DocumentCreate(
        client_id=document.client_id,
        wealth_manager_id=document.wealth_manager_id,
        document_name=document_name or document.document_name,
        description=description or document.description,
        docusign_url=docusign_url or document.docusign_url,
        signed=signed or False,
    )
    document = crud.document.update(db, db_obj=document, obj_in=document_in)
    return document
