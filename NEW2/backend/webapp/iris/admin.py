from django.contrib import admin
from .models import *



class IrisAdmin(admin.ModelAdmin):
    list_display =('species','petal_length')

    
admin.site.register(Iris,IrisAdmin)
