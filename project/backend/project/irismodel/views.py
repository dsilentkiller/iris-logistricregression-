from django.shortcuts import render
from .serializers import *

from rest_framework import viewsets


class IrisFlowerView(viewsets.ModelViewSet):
    serializer_class = IrisFlowerSerializer
    queryset = IrisFlower.objects.all()
