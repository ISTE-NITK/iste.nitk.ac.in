# Generated by Django 2.2 on 2019-07-31 18:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0019_auto_20190731_2328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 7, 31, 23, 43, 13, 211497)),
        ),
    ]
