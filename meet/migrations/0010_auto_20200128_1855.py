# Generated by Django 2.2.4 on 2020-01-28 18:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meet', '0009_auto_20200128_1851'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meet',
            name='end_time',
            field=models.TimeField(default=datetime.time(18, 55, 45, 170796)),
        ),
        migrations.AlterField(
            model_name='meet',
            name='start_time',
            field=models.TimeField(default=datetime.time(18, 55, 45, 170754)),
        ),
    ]