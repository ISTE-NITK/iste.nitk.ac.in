# Generated by Django 2.2 on 2019-08-01 02:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0027_auto_20190801_0738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 8, 1, 8, 0, 25, 361760)),
        ),
    ]
