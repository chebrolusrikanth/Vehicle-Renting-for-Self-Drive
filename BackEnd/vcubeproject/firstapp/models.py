from django.db import models

# Create your models here.

class signup(models.Model):
    firstname=models.CharField(max_length=30)
    lastname=models.CharField(max_length=30)
    email=models.EmailField(max_length=60, unique=True)
    password=models.CharField(max_length=10)
    phoneno=models.CharField(max_length=10,primary_key=True)
    aadharimage = models.ImageField(upload_to='images/')
    bikercimage = models.ImageField(upload_to='images/')
    licenseimage = models.ImageField(upload_to='images/')    
