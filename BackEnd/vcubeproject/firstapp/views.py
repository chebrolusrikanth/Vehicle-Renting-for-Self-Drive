from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK,HTTP_404_NOT_FOUND
from rest_framework.response import Response
from .serializer import signupserilalizer
from json import loads
from .models import signup
import random
from django.core.mail import send_mail


# Create your views here.
class signupapi(APIView):
    def post(self,request):
        signupdata=signupserilalizer(data=request.data)
        if signupdata.is_valid()==True:
            signupdata.save()
            return Response(status=HTTP_201_CREATED)
        else:
            print(signupdata.errors)
            return Response(signupdata.errors,status=HTTP_400_BAD_REQUEST)

class loginapi(APIView):
    def post(self,request):
        remailphoneno=request.data['emailphoneno']
        rpassword=request.data['password']
        output=signup.objects.filter(email=remailphoneno).exists()
        print(output)
        '''output1=signup.objects.get(phoneno=rphoneno)
        print(output1)'''
        output3=signup.objects.filter(password=rpassword).exists()
        print(output3)
        account=signup(email=remailphoneno,password=rpassword)
        print(account.data)
        return Response(status=HTTP_200_OK)

def otpgeneration():
    s=''
    for i in range(0,4):
        res=random.randint(0,9)
        s=s+str(res)
    return s

class forgotapi(APIView):
    def post(self,request):
        val=signup.objects.filter(email=request.data['email'])
        if len(val)>0:
            otp=otpgeneration()
            subject='OTP'
            from_user='ch.srikanth0809@gmail.com'
            to_list=[request.data['email']]
            msg='''
                {} this is the otp to update password'''.format(otp)
            send_mail(subject=subject,from_email=from_user,recipient_list=to_list,message=msg)
            #return redirect('optpvalidationapi',{'otp':otp})
        else:
            return Response(status=HTTP_404_NOT_FOUND)
        return Response(status=HTTP_200_OK)

class otpvalidation(APIView):
    def post(self,request):
        print(request.data)
        return Response(status=HTTP_200_OK)
        