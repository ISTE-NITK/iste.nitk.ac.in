# Generated by Django 3.0.7 on 2021-05-02 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0011_auto_20210502_1128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('F', 'Female'), ('M', 'Male')], default='M', max_length=1),
        ),
    ]