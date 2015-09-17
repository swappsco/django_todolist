from rest_framework import viewsets
from django_todolist.todo.models import Todo
from django_todolist.api.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows to view or edit todos
    """
    queryset = Todo.objects.all().order_by('-created')
    serializer_class = TodoSerializer
