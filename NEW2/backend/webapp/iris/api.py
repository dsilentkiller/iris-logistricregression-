from typing import Any
from .models import Iris
from rest_framework.views import APIView, Response, status
from rest_framework import viewsets
from .serializers import IrisSerializer
from sklearn.cluster import KMeans
import joblib as joblib

import json 
import numpy


class IrisViewSet(viewsets.ModelViewSet):
    serializer_class =IrisSerializer
    queryset = Iris.objects.all()


class MyEncoder(json.JSONEncoder):
    def default(self, obj) :
        if isinstance(obj,numpy.integer):
            return int(obj)
        elif isinstance(obj,numpy.floating):
            return float(obj)
        elif isinstance(obj,numpy.ndarray):
            return obj.tolist()
        else:
            return super(MyEncoder,self).default(obj)
        
class IrisTrain(APIView):
    #TRAIN IRIS CLUSTER MODEL

    def get(self,request,format=None):
        print("..IrisTrain get..")
        snippets = Iris.objects.all()
        serializer = IrisSerializer(snippets,many=True)
        return Response(serializer.data)
    
    def post(self,request,format=None):
        print('...IrisTrain post ...')
        print(request.data)

        n_clusters = request.data("cluster_number")
        n_clusters = int(n_clusters)


        print("n_cluster = %d" % n_clusters)
        model = KMeans(n_clusters=n_clusters)
        irisObjects = Iris.objects.all()
        irisDataTrain =[[oneIris.sepal_length,oneIris.sepal_width,oneIris.petal_length,oneIris.petal_width] for oneIris in irisObjects]
       #test data
        print("delgation data print")
        print(irisDataTrain[0])

        model.fit(irisDataTrain)

        #save model for prediction
        joblib.dump(model,'model.kmeans')
        #test saved prediction
        model = joblib.load('model.kmeans')
        #cluster result 
        labels = model.predict(irisDataTrain)

        print('cluster result')
        print(labels)


        print("=======================================================================================================")
        #transfer data to client
        irisDataDict =[
            {'sepal_length':oneIris.sepal_length,'sepal_width':oneIris.sepal_width,"petal_length":oneIris.petal_length,"petal_width":oneIris.petal_width}
        ]
        print(irisDataDict[0])
        print(len(irisDataDict))

        for i in range(0, len(irisDataDict)):
            irisDataDict[i]['cluster']=labels[i]

        print(irisDataDict[0])

        respData = json.dumps(irisDataDict,cls =MyEncoder)

        return Response(respData,status =status.HTTP_201_CREATED)
    

class IrisPredict(APIView):
        #prdict iris cluster

        def post(self,request,format = None):
            print("-----------------------------IrisPredict Post _________________________")
            print(request.data)
            sepal_length = request.data("sepal_length")
            sepal_width =request.data["sepal_width"]
            petal_length =request.data["petal_length"]
            petal_width =request.data["petal_width"]

            print("sepal_length=%s" %sepal_length)

            irisDataTrain =[[sepal_length,sepal_width,petal_length,petal_width]]

            #test data 
            print("delegation data print")
            print(irisDataTrain[0])
            #test saved prdiction

            model = joblib.load('model.kmeans')
            #cluster result
            labels = model.predict(irisDataTrain)
            print("cluster result")
            print(labels)

            print("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

            #transfer data to client 

            irisDataPredict ={
                'predicted_cluster':labels[0]
            }
            print(irisDataPredict["predicted_cluster"])
            respData = json.dumps(irisDataPredict,cls =MyEncoder)
            return Response(respData,status = status.HTTP_201_CREATED)



