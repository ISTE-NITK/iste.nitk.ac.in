# Generated by Django 2.2 on 2019-08-08 06:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0037_auto_20190808_1137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 8, 8, 11, 52, 50, 747931)),
        ),
    ]
