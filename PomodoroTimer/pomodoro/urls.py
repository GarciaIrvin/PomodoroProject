from django.urls import path
from . import views
#path(route,view,kwargs,name)
urlpatterns = [
    path("", views.home, name="home"),
]