#!/bin/bash

# Portfolio Backend Startup Script
# =================================

echo "🚀 Starting Portfolio Backend..."
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  WARNING: .env file not found!"
    echo ""
    echo "Creating .env file with default values..."
    cat > .env << 'EOF'
# Email Configuration for Contact Form Notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=nsbista@wisc.edu
SMTP_PASSWORD=your-app-password-here
RECIPIENT_EMAIL=nsbista@wisc.edu

# Frontend URLs for CORS
FRONTEND_URL=http://localhost:3000
PRODUCTION_FRONTEND_URL=https://n1-sb.com
EOF
    echo "✅ Created .env file"
    echo ""
    echo "📝 NEXT STEPS:"
    echo "   1. Edit the .env file and add your Gmail App Password"
    echo "   2. See EMAIL_SETUP.md for instructions"
    echo "   3. Re-run this script"
    echo ""
    exit 1
fi

# Activate virtual environment
if [ -d "venv" ]; then
    echo "✅ Activating virtual environment..."
    source venv/bin/activate
else
    echo "❌ Virtual environment not found!"
    echo "Creating virtual environment..."
    python3 -m venv venv
    source venv/bin/activate
    echo "📦 Installing dependencies..."
    pip install -r requirements.txt
fi

echo ""
echo "✅ Backend is ready!"
echo ""
echo "📧 Email Configuration:"
grep "SMTP_USER=" .env | sed 's/SMTP_USER=/   Email: /'
grep "RECIPIENT_EMAIL=" .env | sed 's/RECIPIENT_EMAIL=/   Notifications: /'
echo ""
echo "🌐 Starting server on http://localhost:8000"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start the server
uvicorn main:app --reload --port 8000

