import importlib,os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from App.models import Game, User
from django.core.files.images import ImageFile

objGame = Game.objects.filter(gameId = '5')
for i in objGame:
	initial = i.score
	userObj = i.name
	i.score = (i.score+1)*2
	if i.score > 250:
		i.score = 250
	i.save()
	#print(i.name.name, i.score, initial)
	userObj.score -= initial - i.score
	userObj.save()

	
