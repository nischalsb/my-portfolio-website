# crud.py (NEW FILE)
from sqlalchemy.orm import Session
from models import ContactMessage
from schemas import ContactMessageCreate

def create_contact_message(db: Session, contact: ContactMessageCreate):
    """Save a new contact message to database"""
    db_contact = ContactMessage(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contact_messages(db: Session, skip: int = 0, limit: int = 100):
    """Get all contact messages (for admin view later)"""
    return db.query(ContactMessage).offset(skip).limit(limit).all()

def get_contact_message(db: Session, message_id: int):
    """Get a specific contact message by ID"""
    return db.query(ContactMessage).filter(ContactMessage.id == message_id).first()