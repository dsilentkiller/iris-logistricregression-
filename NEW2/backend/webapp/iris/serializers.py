from rest_framework import serializers
from iris.models import *
#irisserializer

class IrisSerializer(serializers.ModelSerializer):
    class Meta:
        model =Iris
        fields = '__all__'