import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import asyncio
from concurrent.futures import ThreadPoolExecutor

def send_contact_notification(name: str, email: str, message: str):
    """
    Send email notification when someone submits the contact form
    """
    # Email configuration from environment variables
    SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "465"))  # Changed to 465 for SSL
    SMTP_USER = os.getenv("SMTP_USER")  # Your email
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")  # Your app password
    RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", SMTP_USER)  # Where to send notifications
    USE_SSL = os.getenv("SMTP_USE_SSL", "true").lower() == "true"  # Use SSL by default
    
    # Skip if email not configured
    if not SMTP_USER or not SMTP_PASSWORD:
        print("⚠️  Email not configured. Set SMTP_USER and SMTP_PASSWORD in .env file")
        return False
    
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'📬 New Portfolio Contact: {name}'
        msg['From'] = SMTP_USER
        msg['To'] = RECIPIENT_EMAIL
        
        # Create HTML email body
        html_body = f"""
        <html>
            <head>
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                    .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                    .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                              color: white; padding: 30px; border-radius: 10px 10px 0 0; }}
                    .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                    .field {{ margin-bottom: 20px; padding: 15px; background: white; 
                            border-left: 4px solid #667eea; border-radius: 5px; }}
                    .label {{ font-weight: bold; color: #667eea; font-size: 12px; 
                            text-transform: uppercase; margin-bottom: 5px; }}
                    .value {{ color: #333; font-size: 16px; }}
                    .message-box {{ background: white; padding: 20px; border-radius: 5px; 
                                   border: 1px solid #ddd; white-space: pre-wrap; }}
                    .footer {{ text-align: center; margin-top: 20px; color: #666; font-size: 12px; }}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0;">🎉 New Contact Form Submission</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">
                            Someone reached out through your portfolio!
                        </p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">👤 Name</div>
                            <div class="value">{name}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">📧 Email</div>
                            <div class="value">
                                <a href="mailto:{email}" style="color: #667eea; text-decoration: none;">
                                    {email}
                                </a>
                            </div>
                        </div>
                        
                        <div class="field">
                            <div class="label">💬 Message</div>
                            <div class="message-box">{message}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">🕐 Received At</div>
                            <div class="value">{datetime.now().strftime("%B %d, %Y at %I:%M %p")}</div>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
                            <strong>Quick Reply:</strong><br>
                            <a href="mailto:{email}?subject=Re: Your message on my portfolio" 
                               style="display: inline-block; margin-top: 10px; padding: 10px 20px; 
                                      background: #667eea; color: white; text-decoration: none; 
                                      border-radius: 5px;">
                                📨 Reply to {name}
                            </a>
                        </div>
                        
                        <div class="footer">
                            <p>This email was sent from your portfolio contact form</p>
                            <p>Portfolio: <a href="https://n1-sb.com" style="color: #667eea;">n1-sb.com</a></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Plain text version
        text_body = f"""
        New Contact Form Submission
        ============================
        
        Name: {name}
        Email: {email}
        Received: {datetime.now().strftime("%B %d, %Y at %I:%M %p")}
        
        Message:
        {message}
        
        ---
        Reply to: {email}
        """
        
        # Attach both versions
        msg.attach(MIMEText(text_body, 'plain'))
        msg.attach(MIMEText(html_body, 'html'))
        
        # Send email - Use SSL or TLS based on config
        if USE_SSL:
            # Use SSL (port 465)
            import ssl
            context = ssl.create_default_context()
            with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context, timeout=30) as server:
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.send_message(msg)
        else:
            # Use TLS (port 587)
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=30) as server:
                server.starttls()
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.send_message(msg)
        
        print(f"✅ Email notification sent successfully to {RECIPIENT_EMAIL}")
        return True
        
    except Exception as e:
        print(f"❌ Error sending email: {str(e)}")
        return False


async def send_email_async(name: str, email: str, message: str):
    """
    Async wrapper for sending email (non-blocking)
    """
    loop = asyncio.get_event_loop()
    with ThreadPoolExecutor() as executor:
        await loop.run_in_executor(
            executor, 
            send_contact_notification, 
            name, 
            email, 
            message
        )

