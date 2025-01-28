import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from .models import Subscriber


def send_mail(title: str, section: str):
    smtp_server = "smtp.gmail.com"
    smtp_port = 587

    sender = "vigorros@gmail.com"
    password = "feqv kozl apgx qboe"

    subject = "Sarah's Blog"

    mensaje_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Blog Post from Sarah</title>
        <style>
            body {{
                font-family: 'Arial', sans-serif;
                background-color: #f9f9f9;
                color: #333;
                line-height: 1.6;
                padding: 20px;
                margin: 0;
            }}
            .container {{
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }}
            h1 {{
                color: #2c3e50;
            }}
            p {{
                font-size: 16px;
            }}
            .button {{
                display: inline-block;
                padding: 10px 20px;
                margin-top: 20px;
                font-size: 16px;
                color: #ffffff !important;
                background-color: #007bff;
                text-decoration: none;
                border-radius: 5px;
            }}
            .button:hover {{
                background-color: #0056b3;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>New Blog Post from Sarah!</h1>
            <p>Hello,</p>
            <p>Sarah has just published a new post on her blog. Don’t miss out on the latest updates and exclusive content she has prepared for you.</p>
            <p>Post title: <strong>"{title}"</strong></p>
            <p>Click the button below to read the full post on Sarah’s blog.</p>
            <a href="http://localhost:3000/{section}" class="button">Read the Post</a>
            <p style="margin-top: 30px;">Thank you for following Sarah’s blog. We love having you with us!</p>
            <a href="http://localhost:3000/unsubscribe">Unsubscribe</a>
        </div>
    </body>
    </html>
    """

    msg = MIMEMultipart()
    msg["From"] = sender
    msg["Subject"] = subject
    msg.attach(MIMEText(mensaje_html, "html"))

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender, password)
        
        emails = Subscriber.objects.all()

        for email in emails:
            server.sendmail(sender, email.email, msg.as_string())
        print("Correo enviado con éxito.")
        
    except Exception as e:
        print(f"Error al enviar el correo: {e}")
        
    finally:
        server.quit()