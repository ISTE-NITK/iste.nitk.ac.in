# Generated by Django 2.2.3 on 2019-07-02 10:49

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0007_auto_20190702_1208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 7, 2, 10, 49, 22, 112928)),
        ),
    ]
