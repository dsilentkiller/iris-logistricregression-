from django.db import models
import pandas as pd
from sklearn.linear_model import LogisticRegression
import joblib

# first way
class Prediction(models.Model):
    iris_setosa = 0
    iris_versicolor = 1
    iris_virginica =2

    SPECIES_CHOICE =(
        ('iris_setosa','iris_setosa'),
        ('iris_versicolor','iris_versicolor'),
        ('iris_virginica','iris_virginica'),
    )

    species = models.CharField(choices=SPECIES_CHOICE)
    sepal_length =models.CharField(max_length=200)
    sepal_width =models.CharField(max_length=200)
    petal_length =models.CharField(max_length=200)
    petal_width=models.CharField(max_length=200)

    def __str__(self) :
        return self.species






#second way
# class Prediction(models.Model):
#     data = pd.read_csv('../data/IRIS.csv')

# #training data 
#     X = data[['sepal_length','sepal_width','petal_length','petal_width']]
#     y = data['species']

#     model = LogisticRegression()
#     model.fit(X,y)

# #save the model to disk
#     joblib.dump(model,'model.pk1')




