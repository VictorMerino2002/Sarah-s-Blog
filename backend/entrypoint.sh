#!/bin/sh

echo "Ejecutando migraciones..."
python manage.py migrate

echo "Iniciando servidor..."
exec "$@"