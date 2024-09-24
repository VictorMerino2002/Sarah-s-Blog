from rest_framework import serializers
from .models import Tourism

class TourismSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tourism
        fields = ('id', 'location', 'date', 'content')