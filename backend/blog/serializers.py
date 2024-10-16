from rest_framework import serializers
from .models import Tourism, Magazine

class TourismSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tourism
        fields = ('id', 'location', 'date', 'content')

class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'title', 'date', 'content')