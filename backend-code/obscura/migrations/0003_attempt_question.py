# Generated by Django 3.0.7 on 2022-01-31 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('obscura', '0002_auto_20220129_2307'),
    ]

    operations = [
        migrations.CreateModel(
            name='attempt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200, unique=True)),
                ('firstYear', models.IntegerField(default=0)),
                ('secondYear', models.IntegerField(default=0)),
                ('thirdYear', models.IntegerField(default=0)),
                ('fourthYear', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200, unique=True)),
                ('firstYear', models.IntegerField(default=0)),
                ('secondYear', models.IntegerField(default=0)),
                ('thirdYear', models.IntegerField(default=0)),
                ('fourthYear', models.IntegerField(default=0)),
            ],
        ),
    ]
