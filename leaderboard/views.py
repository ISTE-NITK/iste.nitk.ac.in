from django.shortcuts import render
from .models import Participant

# Create your views here.
def indexView(request):
    participants = Participant.objects.all().order_by('-points','name','roll_no')
    return render(request, 'leaderboard/index.html', {'participants':participants})
