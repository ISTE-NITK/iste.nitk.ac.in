# Generated by Django 2.2 on 2019-09-05 12:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0047_auto_20190905_1101'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 9, 5, 17, 51, 33, 431493)),
        ),
    ]