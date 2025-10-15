# main.py (COMPLETE VERSION)
import os
from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from dotenv import load_dotenv

# Import your modules
from database import get_db, engine
from models import Base
from schemas import ContactMessageCreate, ContactMessageResponse
import crud
from email_service import send_contact_notification

# Load environment variables
load_dotenv()

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio Contact API",
    description="Backend API for Nischal's portfolio contact form",
    version="1.0.0"
)

# CORS configuration
frontend_urls = [
    os.getenv("FRONTEND_URL", "http://localhost:3000"),
    os.getenv("PRODUCTION_FRONTEND_URL", "https://n1-sb.com")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_urls,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Portfolio Contact API is running!",
        "version": "1.0.0",
        "status": "healthy"
    }

@app.post("/contact", response_model=ContactMessageResponse)
def create_contact(
    contact: ContactMessageCreate, 
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """
    Create a new contact message and send email notification
    """
    try:
        # Save to database
        db_contact = crud.create_contact_message(db=db, contact=contact)
        
        # Send email notification in background (non-blocking)
        background_tasks.add_task(
            send_contact_notification,
            db_contact.name,
            db_contact.email,
            db_contact.message
        )
        
        return ContactMessageResponse(
            id=db_contact.id,
            name=db_contact.name,
            email=db_contact.email,
            message=db_contact.message,
            created_at=db_contact.created_at
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error saving message: {str(e)}")

@app.get("/contact-messages")
def get_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Get all contact messages (admin endpoint)
    """
    messages = crud.get_contact_messages(db, skip=skip, limit=limit)
    return messages

@app.get("/health")
def health_check():
    return {"status": "healthy", "database": "connected"}