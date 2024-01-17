# Generated by Django 4.2 on 2024-01-17 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0012_auto_20230120_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='year',
            field=models.IntegerField(choices=[(2018, 2018), (2019, 2019), (2020, 2020), (2021, 2021), (2022, 2022), (2023, 2023), (2024, 2024)], default=2024),
        ),
    ]
