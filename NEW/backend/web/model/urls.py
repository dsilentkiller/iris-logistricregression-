from django.urls import path
import  model.views as views
urlpatterns =[
# path('predict/', views.IRIS_Model_Predict.as_view(), name ='api_predict'),
path('predict/', views.predict, name ='predict'),


]