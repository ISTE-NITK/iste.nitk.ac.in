# Generated by Django 2.2 on 2019-06-27 07:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recruitments', '0014_auto_20190627_0434'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ApplicationProgress',
            new_name='ApplicantProgress',
        ),
    ]