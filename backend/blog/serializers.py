from rest_framework import serializers
from .models import Tourism, Magazine, Journal

class TourismSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tourism
        fields = ('id', 'title', 'date', 'content')

class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('id', 'title', 'date', 'content')

class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ('id', 'title', 'date', 'content')