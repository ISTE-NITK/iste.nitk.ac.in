# Generated by Django 2.2 on 2019-09-05 02:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0044_auto_20190905_0809'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 9, 5, 8, 10, 34, 753239)),
        ),
    ]
