from django.db import models

# Create your models here.
class Iris(models.Model):
    sepal_length = models.CharField(max_length=200)
    sepal_width = models.CharField(max_length=200)
    
    petal_length = models.CharField(max_length=200)
    
    petal_width= models.CharField(max_length=200)
    species = models.CharField(max_length=200,blank=True)

    def __unicode__(self):
        return self.species