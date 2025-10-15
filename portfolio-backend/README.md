# Portfolio Backend API 🚀

FastAPI backend for handling contact form submissions with email notifications.

## ✨ Features

- ✅ **SQLite Database** - Stores all contact form submissions
- ✅ **Email Notifications** - Sends beautiful HTML emails instantly
- ✅ **Background Tasks** - Non-blocking email sending
- ✅ **CORS Enabled** - Works with your React frontend
- ✅ **REST API** - Clean, documented endpoints
- ✅ **Auto-reload** - Development mode with hot reload

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install packages
pip install -r requirements.txt
```

### 2. Configure Email (Optional but Recommended)

Create a `.env` file:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
RECIPIENT_EMAIL=your-email@gmail.com

# Frontend URLs
FRONTEND_URL=http://localhost:3000
PRODUCTION_FRONTEND_URL=https://n1-sb.com
```

**Get Gmail App Password:**
1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in `.env`

📖 **Full setup guide:** [EMAIL_SETUP.md](EMAIL_SETUP.md)

### 3. Start the Server

```bash
# Option 1: Using the start script (recommended)
./start_backend.sh

# Option 2: Manual start
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

Server will run at: **http://localhost:8000**

## 📡 API Endpoints

### Health Check
```bash
GET /
# Returns: {"message": "Portfolio Contact API is running!", "version": "1.0.0", "status": "healthy"}
```

### Submit Contact Form
```bash
POST /contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hi! I'd like to discuss a project..."
}

# Returns: 
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hi! I'd like to discuss a project...",
  "created_at": "2025-10-15T22:22:57.502513"
}
```

### Get All Messages (Admin)
```bash
GET /contact-messages?skip=0&limit=100
# Returns: Array of all contact messages
```

### Health Check
```bash
GET /health
# Returns: {"status": "healthy", "database": "connected"}
```

## 🧪 Testing

### Test Email Configuration
```bash
source venv/bin/activate
python test_email.py
```

This will send a test email to verify your setup is working.

### Test API with cURL
```bash
# Test health endpoint
curl http://localhost:8000/

# Test contact submission
curl -X POST http://localhost:8000/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com", "message": "Hello!"}'

# Get all messages
curl http://localhost:8000/contact-messages
```

## 📁 Project Structure

```
portfolio-backend/
├── main.py              # FastAPI app & routes
├── models.py            # Database models (SQLAlchemy)
├── schemas.py           # Pydantic schemas for validation
├── database.py          # Database connection & session
├── crud.py              # Database operations
├── email_service.py     # Email notification service
├── requirements.txt     # Python dependencies
├── .env                 # Environment variables (create this)
├── .env.example         # Example env file
├── portfolio.db         # SQLite database (auto-created)
├── start_backend.sh     # Startup script
├── test_email.py        # Email testing utility
├── EMAIL_SETUP.md       # Detailed email setup guide
└── README.md            # This file
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | Your email address | - |
| `SMTP_PASSWORD` | App password | - |
| `RECIPIENT_EMAIL` | Where to receive notifications | Same as `SMTP_USER` |
| `FRONTEND_URL` | Development frontend URL | `http://localhost:3000` |
| `PRODUCTION_FRONTEND_URL` | Production frontend URL | `https://n1-sb.com` |
| `DATABASE_URL` | Database connection string | `sqlite:///./portfolio.db` |

### Email Providers

**Gmail** (Default)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

**Outlook/Hotmail**
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
```

**Yahoo**
```
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

## 🐛 Troubleshooting

### Backend won't start
```bash
# Make sure virtual environment is activated
source venv/bin/activate

# Reinstall dependencies
pip install -r requirements.txt

# Check Python version (needs 3.8+)
python --version
```

### Email not sending
1. Check `.env` file exists with correct credentials
2. Verify App Password (not regular password for Gmail)
3. Check spam folder
4. Run test: `python test_email.py`
5. Check backend logs for error messages

### CORS errors from frontend
- Make sure `FRONTEND_URL` in `.env` matches your frontend URL
- Backend must be running on port 8000
- Check browser console for specific error

### Database errors
```bash
# Delete and recreate database
rm portfolio.db
# Restart backend - it will auto-create tables
```

## 🚢 Deployment

### Requirements
- Python 3.8+
- 512MB RAM minimum
- Port 8000 (or configure differently)

### Recommended Platforms
- **Railway** (Free tier available)
- **Render** (Free tier available)
- **Heroku** (Paid)
- **DigitalOcean** (Paid)
- **AWS/GCP/Azure** (Various pricing)

### Deployment Notes
1. Set environment variables on your platform
2. Keep SQLite for low traffic (<1000/month)
3. Upgrade to PostgreSQL for high traffic
4. Set `PRODUCTION_FRONTEND_URL` to your actual domain

## 📊 Database

### SQLite (Current)
- Perfect for portfolios and small sites
- No setup required
- Handles 1-1000 contacts/month easily
- Single file: `portfolio.db`

### View Database
```bash
# Install sqlite3
brew install sqlite3  # macOS
apt-get install sqlite3  # Ubuntu

# Query database
sqlite3 portfolio.db
> SELECT * FROM contact_messages;
> .exit
```

## 🔐 Security

- ✅ Environment variables for sensitive data
- ✅ `.gitignore` protects `.env` and `*.db` files
- ✅ CORS configured for specific origins only
- ✅ Email validation on input
- ✅ No SQL injection (using SQLAlchemy ORM)

## 📝 Development

### Add New Endpoints
Edit `main.py`:

```python
@app.get("/new-endpoint")
def new_endpoint():
    return {"message": "Hello!"}
```

### Modify Database Schema
1. Edit `models.py`
2. Delete `portfolio.db`
3. Restart backend (auto-creates new schema)

### Change Email Template
Edit `email_service.py` → `send_contact_notification()` function

## 🎉 Success!

Your backend is now:
- ✅ Storing contact form submissions in SQLite
- ✅ Sending beautiful email notifications
- ✅ Running at http://localhost:8000
- ✅ Ready for production deployment

## 🆘 Need Help?

- **Email Setup:** See [EMAIL_SETUP.md](EMAIL_SETUP.md)
- **Test Email:** Run `python test_email.py`
- **API Docs:** Visit http://localhost:8000/docs (auto-generated)
- **Alternative API Docs:** Visit http://localhost:8000/redoc

## 📄 License

This is part of Nischal Singh Bista's portfolio project.

---

**Happy Coding! 🚀**

