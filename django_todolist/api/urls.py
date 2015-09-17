from rest_framework import routers
from django.conf.urls import url, include
from django_todolist.api import views


router = routers.DefaultRouter(trailing_slash=False)
router.register(r'todos', views.TodoViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/',
        include('rest_framework.urls', namespace='rest_framework'))
]
