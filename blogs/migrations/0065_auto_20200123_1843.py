# Generated by Django 2.2.4 on 2020-01-23 18:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0064_auto_20200123_1841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2020, 1, 23, 18, 43, 35, 20473)),
        ),
    ]