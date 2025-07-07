# schemas.py (NEW FILE)
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactMessageResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime
    
    class Config:
        from_attributes = True