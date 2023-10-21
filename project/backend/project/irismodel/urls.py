from django.contrib import admin
from django.urls import path
from irismodel.views import *

urlpatterns = [
    path('iris-flower/', IrisFlowerView.as_view(), name='iris-flower'),
]
