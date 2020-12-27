from django.contrib import admin
from .models import Participant

# Register your models here.
@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    ordering = ['-points','name','roll_no']
    search_fields = ['name','roll_no']
    list_display = ['id','name','roll_no','points']