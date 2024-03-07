from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK,HTTP_404_NOT_FOUND
from rest_framework.response import Response
from .serializer import signupserilalizer,UserSerializer
from django.contrib.auth import authenticate,login,logout
import random
from django.contrib.auth.models import User
from .models import signup
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.sessions.models import Session
from rest_framework.decorators import api_view,authentication_classes,permission_classes

# Create your views here.
class signupapi(APIView):
    def post(self,request):
        signupdata=signupserilalizer(data=request.data)
        serializer=UserSerializer(data=request.data)
        if signupdata.is_valid()==True and serializer.is_valid()==True:
            account=serializer.save()
            signupdata.save()
            return Response({
                'message': 'User created successfully',
                'user_data': {
                    'username': account.username,
                    'email': account.email,
                    'first_name': account.first_name,
                    'last_name': account.last_name
                }
            }, status=HTTP_201_CREATED)
        else:
            return Response(signupdata.errors,status=HTTP_400_BAD_REQUEST)


class loginapi(APIView):
    def post(self,request):
        remail=request.data['emailphone']
        rpassword=request.data['password']
        valid_user=authenticate(request,username=remail,password=rpassword)    
        if valid_user != None:
            login(request,valid_user)
            return Response(status=HTTP_200_OK)
        else:
            return Response(status=HTTP_400_BAD_REQUEST)
        
class logoutapi(APIView):
    def get(self,request):
        logout(request)
        return Response(status=HTTP_200_OK)

def otpgeneration():
    res=random.randint(1000,9999)
    return res

class forgotapi(APIView):
    def post(self,request):
        val=User.objects.filter(email=request.data['email'])
        if len(val)>0:
            otp=otpgeneration()
            request.session['gen_otp'] = otp
            request.session.set_expiry(300)
            request.session.save()
            print(request.session.items())
            subject='OTP'
            from_user='aravindpolusani@gmail.com'
            to_list=[request.data['email']]
            """
            msg='''
                {} this is the otp to update your personal details...
                Note:This otp is valide for 5 mins'''.format(otp)
            send_mail(subject=subject,from_email=from_user,recipient_list=to_list,message=msg)"""
            return Response(status=HTTP_200_OK)
        else:
            return Response(status=HTTP_404_NOT_FOUND)

class otpvalidation(APIView):
    def post(self,request):
        recent_session = Session.objects.order_by('-expire_date').first()
        session_otp=recent_session.get_decoded()['gen_otp']
        user_otp=request.data['otp']
        if str(session_otp)==user_otp:
            return Response(status=HTTP_200_OK)
        else:
            return Response(status=HTTP_400_BAD_REQUEST)
        
