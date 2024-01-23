from django.db import models

# Create your models here.
class diabetes(models.Model):
    Pregnancies = models.IntegerField(default=0.5)
    Glucose = models.IntegerField(default=0.5)
    BloodPressure = models.FloatField(default=80.0)
    SkinThickness = models.FloatField(default=0.5)
    Insulin = models.FloatField(default=0.5)
    BMI = models.FloatField(default=25.0)  
    DiabetesPedigreeFunction = models.FloatField(default=0.5)
    Age = models.IntegerField(default=25)
