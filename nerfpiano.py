import importlib,os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from App.models import Game
from django.core.files.images import ImageFile

objGame = Game.objects.filter(gameId = '3')
for i in objGame:
	i.score = i.score//2
	if i.score > 250:
		i.score = 250
	i.save()
	
