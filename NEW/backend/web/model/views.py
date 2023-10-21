from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import joblib
import numpy as np
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from model.apps import ModelConfig
import pandas as pd
import os
from .serializers import PredictionSerializer
from joblib import load
model = load('../savedModel/irispredictor.pk')

# class IRIS_Model_Predict(APIView):
#     def post(self,request,format=None):
#         data = request.data
#         keys=[]
#         values =[]
#         for key in data:
#             keys.append(key)
#             values.append(data[Key])
#         X = pd.Series(values).to_numpy().reshape(1, -1)
#         loaded_mlmodel = ModelConfig.mlmodel
#         y_pred =loaded_mlmodel.predict(X)
#         y_pred =pd.Series(y_pred)
#         target_map = {0:'iris-setosa',1:'iris-versicolor',2:'iris-virginica'}
#         y_pred = y_pred.map(target_map).to_numpy
#         response_dict = {'Predicted Iris Specis':y_pred[0]}
#         return Response(response_dict,status=200)


# model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','data','IRIS.csv')
# model = joblib.load(model_path)

@api_view(['POST'])
def predict(request):
    if request.method == 'POST':
        serializer = PredictionSerializer(data=request.data)
        if serializer.is_valid():
            input_data = tuple(serializer.validate_data.values())
            input_data_as_numpy_array = np.asarray(input_data)
            input_data_reshaped=input_data_as_numpy_array.reshape(1,-1)
            print(input_data_reshaped)

            # make prediction using model 
            prediction = model.predict(input_data_reshaped)



 # def predict(request):           
#load the saved model from disk
# model = joblib.load('model_path')

# # define a view that takes input data and returns prediction
# @csrf_exempt
        #get the input data from the request 
        # data =request.POST.dict()
        #convert the input data to a numpy array
        # X = np.array([[float(data['sepal_length']),float(data['sepal_width']),float(data['petal_length']),float(data['petal_width'])]])
        #use the model to make prediction
        # y_pred = model.predict(X)
        #return the prediction as json format
        # return JsonResponse({'prediction':str(y_pred[0])})
    # else:
        # return JsonResponse({'error':'Invalid Request Method'})

# Create your views here.
