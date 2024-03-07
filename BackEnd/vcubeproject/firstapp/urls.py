from django.urls import path
from . import views

urlpatterns=[
    path('signup/',views.signupapi.as_view(),name='signupapi'),
    path('login/',views.loginapi.as_view(),name='loginapi'),
    path('forgot/',views.forgotapi.as_view(),name='forgotapi'),
    path('otpvalidation/',views.otpvalidation.as_view(),name='optpvalidationapi'),
    path('logout/',views.logoutapi.as_view(),name='logoutapi'),
]