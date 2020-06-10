from django import template
from account.models import *

register = template.Library()

@register.filter(name='has_group')
def has_group(user, group_name):
    return user.groups.filter(name="Core").exists()

@register.filter(name='is_sig_head')
def is_sig_head(user):
    check = SigHead.objects.filter(user=user)
    if len(check)==1:
        return True
    return False

@register.filter(name='hasReadAccess')
def hasReadAccess(user):
    check =EventAcces.objects.filter(user=user)
    if len(check)==1:
        return check[0].read
    return False

@register.filter(name='hasWriteAccess')
def hasWriteAccess(user):
    check =EventAcces.objects.filter(user=user)
    if len(check)==1:
        return check[0].write
    return False
