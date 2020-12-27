from django.urls import path,include
from leaderboard import views

app_name = 'leaderboard'
urlpatterns = [
    path('', views.indexView, name='index'),
]