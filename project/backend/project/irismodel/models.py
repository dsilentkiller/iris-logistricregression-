from django.db import models


class IrisFlower(models.Model):
    sepal_length = models.CharField(max_length=300)
    sepal_width = models.CharField(max_length=300)
    petal_length = models.CharField(max_length=300)
    petal_width = models.CharField(max_length=300)
    species = models.CharField(max_length=300)

    def __str__(self):
        return self.species
