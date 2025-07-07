# models.py (UPDATED)
from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class ContactMessage(Base):
    __tablename__ = "contact_messages"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)  # Text for longer messages
    created_at = Column(DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f"<ContactMessage(name='{self.name}', email='{self.email}')>"