# Generated by Django 2.2 on 2019-08-01 02:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0023_auto_20190801_0736'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 8, 1, 7, 36, 11, 497405)),
        ),
    ]
