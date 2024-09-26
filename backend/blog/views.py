from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from .serializers import TourismSerializer
from .models import Tourism

class TourismView(viewsets.ModelViewSet):
    serializer_class = TourismSerializer
    queryset = Tourism.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]