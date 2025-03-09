#!/bin/sh

echo "Ejecutando migraciones..."
python manage.py migrate
python manage.py makemigrations blog
python manage.py migrate
echo "Iniciando servidor..."
exec "$@"