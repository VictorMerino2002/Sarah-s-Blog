from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import TourismSerializer, MagazineSerializer, JournalSerializer
from .models import Tourism, Magazine, Journal, Subscriber
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .mail import send_mail
import json

class TourismView(viewsets.ModelViewSet):
    serializer_class = TourismSerializer
    queryset = Tourism.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        file = request.FILES.get('content')
        if file:
            binary_content = file.read()
            tourism = Tourism.objects.create(
                title=request.data.get('title'),
                date=request.data.get('date'),
                content=binary_content
            )
            serializer = TourismSerializer(tourism)
            send_mail(request.data.get('title'), "tourism")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": "No se proporcionó ningún archivo."}, status=status.HTTP_400_BAD_REQUEST)

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
            send_mail(request.data.get('title'), "magazines")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": "No se proporcionó ningún archivo."}, status=status.HTTP_400_BAD_REQUEST)
    
class JournalView(viewsets.ModelViewSet):
    serializer_class = JournalSerializer
    queryset = Journal.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        file = request.FILES.get('content')
        if file:
            binary_content = file.read()
            journal = Journal.objects.create(
                title=request.data.get('title'),
                date=request.data.get('date'),
                content=binary_content
            )
            serializer = JournalSerializer(journal)
            send_mail(request.data.get('title'), "journal")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": "No se proporcionó ningún archivo."}, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt   
def add_subscriber(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            if email:
                subscriber, created = Subscriber.objects.get_or_create(email=email.lower())
                if created:
                    return JsonResponse({"message": "Subscription added successfully."}, status=201)
                else:
                    return JsonResponse({"message": "This email is already subscribed."}, status=200)
            return JsonResponse({"message": "Invalid email."}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format."}, status=400)
    return JsonResponse({"message": "Method not allowed."}, status=405)

@csrf_exempt
def delete_subscriber(request, email):
    subscriber = get_object_or_404(Subscriber, email=email.lower())
    subscriber.delete()
    return JsonResponse("Subscription deleted", safe=False)