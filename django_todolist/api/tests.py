from django.test import TestCase, RequestFactory, Client
from django_todolist.todo.models import Todo
import json


class ApiTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.client = Client()

    def test_api_url(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_todos_url(self):
        response = self.client.get('/todos')
        self.assertEqual(response.status_code, 200)

    def test_get_existing_todo(self):
        todo = Todo.objects.create(name="My todo name",
                                   description="This is my description")
        response = self.client.get('/todos/%i' % todo.id)
        self.assertEqual(response.status_code, 200)
        returned_object = json.loads(response.content)
        self.assertEqual(returned_object.get('name'), todo.name)
        self.assertEqual(returned_object.get('description'), todo.description)
        self.assertEqual(returned_object.get('checked'), todo.checked)

    def test_get_todos(self):
        expected_items = 10
        for i in range(0, expected_items):
            Todo.objects.create(name="My todo name",
                                description="This is my description")
        response = self.client.get('/todos')
        content = json.loads(response.content)
        self.assertEqual(int(content.get('count')), expected_items)

    def test_post_todo(self):
        todo_dict = {
            'name': 'My Todo',
            'description': 'My Todo Description',
        }

        response = self.client.post('/todos', todo_dict)
        self.assertEqual(response.status_code, 201)

    def test_delete_todo(self):
        todo = Todo.objects.create(name="My todo name",
                                   description="This is my description")

        response = self.client.delete('/todos/%i' % todo.id)
        self.assertEqual(response.status_code, 204)

    def test_update_todo(self):
        todo = Todo.objects.create(name="My todo name",
                                   description="This is my description")
        todo_new_content = {
            'name': 'New Name',
            'description': 'New Description',
        }
        response = self.client.put('/todos/%i' % todo.id,
                                   data=json.dumps(todo_new_content),
                                   content_type='application/json')
        self.assertEqual(response.status_code, 200)

        new_todo = Todo.objects.get(id=todo.id)
        self.assertEqual(new_todo.name, todo_new_content.get('name'))
        self.assertEqual(new_todo.description,
                         todo_new_content.get('description'))

    def test_check_todo(self):
        todo = Todo.objects.create(name="My todo name",
                                   description="This is my description")
        todo_new_content = {'checked': True}
        response = self.client.patch('/todos/%i' % todo.id,
                                     data=json.dumps(todo_new_content),
                                     content_type='application/json')
        self.assertEqual(response.status_code, 200)

        new_todo = Todo.objects.get(id=todo.id)
        self.assertEqual(new_todo.checked, True)
