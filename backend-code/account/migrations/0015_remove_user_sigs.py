# Generated by Django 3.0.7 on 2021-05-11 04:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0014_auto_20210502_1552'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='sigs',
        ),
    ]