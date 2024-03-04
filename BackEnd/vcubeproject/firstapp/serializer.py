from rest_framework.serializers import ModelSerializer,ValidationError
from firstapp.models import signup
from django.contrib.auth.models import User

class signupserilalizer(ModelSerializer):
    class Meta:
        model=signup
        fields='__all__'
