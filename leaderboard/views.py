from django.shortcuts import render
from .models import Participant

# Create your views here.
def indexView(request):
    participants = Participant.objects.all().order_by('-points','name','roll_no')
    ranks = [1]
    curr_rank = 1
    for i in range(1,len(participants)):
        if participants[i].points != participants[i-1].points:
            curr_rank += 1
        ranks.append(curr_rank)
    return render(request, 'leaderboard/index.html', {'participants':zip(ranks,participants)})
