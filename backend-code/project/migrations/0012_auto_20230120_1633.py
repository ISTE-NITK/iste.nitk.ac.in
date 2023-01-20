# Generated by Django 3.1.14 on 2023-01-20 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0011_auto_20220129_2029'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='year',
            field=models.IntegerField(choices=[(2018, 2018), (2019, 2019), (2020, 2020), (2021, 2021), (2022, 2022), (2023, 2023)], default=2023),
        ),
    ]
