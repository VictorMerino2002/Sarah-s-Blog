from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import TourismSerializer, MagazineSerializer
from .models import Tourism, Magazine

class TourismView(viewsets.ModelViewSet):
    serializer_class = TourismSerializer
    queryset = Tourism.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

class MagazineView(viewsets.ModelViewSet):
    serializer_class = MagazineSerializer
    queryset = Magazine.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        file = request.FILES.get('content')
        if file:
            binary_content = file.read()
            magazine = Magazine.objects.create(
                title=request.data.get('title'),
                date=request.data.get('date'),
                content=binary_content
            )
            serializer = MagazineSerializer(magazine)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": "No se proporcionó ningún archivo."}, status=status.HTTP_400_BAD_REQUEST)