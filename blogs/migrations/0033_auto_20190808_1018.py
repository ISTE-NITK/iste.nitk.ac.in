# Generated by Django 2.2 on 2019-08-08 04:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0032_auto_20190804_1046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloghits',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2019, 8, 8, 10, 18, 30, 9637)),
        ),
    ]