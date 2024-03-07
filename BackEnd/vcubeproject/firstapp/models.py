from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class signup(models.Model):
    first_name=models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)
    email=models.EmailField(max_length=60, unique=True)
    password=models.CharField(max_length=10)
    phoneno=models.CharField(max_length=10,primary_key=True)
    aadharimage = models.ImageField(upload_to='images/')
    licenseimage = models.ImageField(upload_to='images/')   