from django.db import models
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class Todo(models.Model):
    """
    Todo Model: name, description, created
    """
    name = models.CharField(max_length=100)
    description = models.TextField(default="")
    checked = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
