# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_auto_20150917_1855'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='checked',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='todo',
            name='description',
            field=models.TextField(default=b''),
        ),
        migrations.AlterField(
            model_name='todo',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
