# 📧 Email Notification Setup Guide

Your contact form now sends email notifications! Follow these steps to complete the setup.

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
cd portfolio-backend
pip install -r requirements.txt
```

### Step 2: Create `.env` File
Create a file named `.env` in the `portfolio-backend` directory:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=nsbista@wisc.edu
SMTP_PASSWORD=your-app-password-here
RECIPIENT_EMAIL=nsbista@wisc.edu

# Frontend URLs
FRONTEND_URL=http://localhost:3000
PRODUCTION_FRONTEND_URL=https://n1-sb.com
```

### Step 3: Get Gmail App Password

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other" (type: "Portfolio Backend")
   - Click "Generate"
   - Copy the 16-character password
   - Replace `your-app-password-here` in `.env` with this password

### Step 4: Test It!
```bash
# Start the backend
uvicorn main:app --reload --port 8000

# The backend will now:
# ✅ Save contact form submissions to SQLite
# ✅ Send you email notifications instantly
```

## 📧 Email Preview

You'll receive beautiful HTML emails like this:

```
🎉 New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name
John Doe

📧 Email
john@example.com

💬 Message
Hi! I'd like to discuss a project...

🕐 Received At
October 15, 2025 at 05:30 PM

[📨 Reply to John Doe]
```

## 🔧 Alternative Email Providers

### Using Outlook/Hotmail
```bash
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### Using Yahoo
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

### Using Custom SMTP
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-password
```

## ✅ Features

- ✨ Beautiful HTML email notifications
- 📱 Mobile-friendly email design
- ⚡ Non-blocking (uses background tasks)
- 🔒 Secure (credentials in .env, not in code)
- 📊 Stores messages in SQLite + sends email
- 🎨 Professional gradient styling
- 📧 One-click reply button

## 🧪 Testing

Test your setup by submitting the contact form on your portfolio:

1. Frontend: http://localhost:3000
2. Fill out the contact form
3. Submit
4. Check your email (nsbista@wisc.edu)

## 🐛 Troubleshooting

### No email received?
1. Check spam folder
2. Verify SMTP credentials in `.env`
3. Check backend logs for errors
4. Make sure 2-Step Verification is enabled (Gmail)

### "Authentication failed" error?
- Use App Password, not regular password (Gmail)
- Enable "Less secure app access" (other providers)

### Still not working?
- Check backend logs: The email service will print status messages
- Test SMTP credentials with a simple script
- Verify port 587 is not blocked by your network

## 📝 What Changed?

1. ✅ Added `email_service.py` - Handles email sending
2. ✅ Updated `main.py` - Integrated email notifications
3. ✅ Updated `requirements.txt` - Added email dependencies
4. ✅ Created `.env` - Email configuration (you need to create this)
5. ✅ Added `.gitignore` - Protects sensitive files

## 🎉 You're Done!

Your portfolio now has a professional contact form that:
- Stores messages in your database
- Sends you instant email notifications
- Looks beautiful on all devices
- Requires zero maintenance

Happy coding! 🚀

