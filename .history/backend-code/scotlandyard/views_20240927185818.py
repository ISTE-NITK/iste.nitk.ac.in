from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Scotland yard 24 works!")

def admin(request):
    return HttpResponse("Scotland yard 24 admin only!")