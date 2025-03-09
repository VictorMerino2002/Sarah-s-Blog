FROM python:3.10

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN apt-get update && apt-get install -y netcat-openbsd

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 8000
CMD /wait-for-it.sh db:5432 -- python manage.py migrate && gunicorn backend.wsgi:application --bind 0.0.0.0:8000
