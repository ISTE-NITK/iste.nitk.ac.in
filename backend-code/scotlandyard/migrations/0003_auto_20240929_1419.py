# Generated by Django 3.0.7 on 2024-09-29 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scotlandyard', '0002_auto_20240929_1412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cellcolor',
            name='color',
            field=models.CharField(max_length=7),
        ),
    ]
