#!/usr/bin/env python3
"""
Test Email Configuration
========================
This script tests if your email configuration is working correctly.
"""

import os
from dotenv import load_dotenv
from email_service import send_contact_notification

# Load environment variables
load_dotenv()

def test_email():
    print("🧪 Testing Email Configuration")
    print("=" * 50)
    print()
    
    # Check if credentials are set
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    recipient = os.getenv("RECIPIENT_EMAIL", smtp_user)
    
    if not smtp_user or not smtp_password:
        print("❌ ERROR: Email not configured!")
        print()
        print("Please set the following in your .env file:")
        print("  - SMTP_USER")
        print("  - SMTP_PASSWORD")
        print()
        print("See EMAIL_SETUP.md for instructions.")
        return
    
    if smtp_password == "your-app-password-here":
        print("❌ ERROR: Please set your actual App Password!")
        print()
        print("Current password is still the default placeholder.")
        print("See EMAIL_SETUP.md for instructions on getting an App Password.")
        return
    
    print(f"📧 SMTP User: {smtp_user}")
    print(f"📬 Recipient: {recipient}")
    print()
    print("Sending test email...")
    print()
    
    # Send test email
    success = send_contact_notification(
        name="Test User",
        email="test@example.com",
        message="This is a test message from your portfolio contact form!\n\nIf you received this, your email notifications are working perfectly! 🎉"
    )
    
    print()
    if success:
        print("✅ SUCCESS! Email sent successfully!")
        print()
        print(f"Check your inbox at: {recipient}")
        print("(Don't forget to check spam folder)")
    else:
        print("❌ FAILED! Could not send email.")
        print()
        print("Common issues:")
        print("  1. Wrong App Password")
        print("  2. 2-Step Verification not enabled (Gmail)")
        print("  3. Network/firewall blocking SMTP")
        print()
        print("See EMAIL_SETUP.md for troubleshooting steps.")

if __name__ == "__main__":
    test_email()

