from django.db import models
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class Todo(models.Model):
    """
    Todo Model: name, description, created
    """
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    created = models.DateTimeField()

    def __str__(self):
        return self.name
