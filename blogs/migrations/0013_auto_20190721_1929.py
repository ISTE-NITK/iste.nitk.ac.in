# Generated by Django 2.2 on 2019-07-21 13:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0012_auto_20190721_1923'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 7, 21, 19, 29, 27, 171913)),
        ),
    ]
