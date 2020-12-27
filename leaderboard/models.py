from django.db import models

# Create your models here.
class Participant(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    name = models.CharField(
        default="",
        max_length=200
    )
    roll_no = models.CharField(
        default="norollno",
        max_length=9
    )
    points = models.IntegerField(
        default = 0
    )
