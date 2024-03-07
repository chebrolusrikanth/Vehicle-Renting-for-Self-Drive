from rest_framework.serializers import ModelSerializer,ValidationError
from firstapp.models import signup
from django.contrib.auth.models import User

class signupserilalizer(ModelSerializer):
    class Meta:
        model=signup
        fields=['first_name','last_name','email','password','phoneno','aadharimage','licenseimage']
        
        
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}  

    def create(self, validated_data):
    
        if User.objects.filter(email=validated_data['email']).exists():
            raise ValidationError({"Error": "Email already exists."})

        if User.objects.filter(username=validated_data['username']).exists():
            raise ValidationError({"Error": "Username already exists."})

        user = User.objects.create(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
