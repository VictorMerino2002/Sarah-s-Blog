from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TourismSerializer
from .models import Tourism

class TourismView(viewsets.ModelViewSet):
    serializer_class = TourismSerializer
    queryset = Tourism.objects.all()