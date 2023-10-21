from rest_framework import serializers
from .models import *


class IrisFlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = IrisFlower
        fields = '__all__'