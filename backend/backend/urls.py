from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from blog import views

router = routers.DefaultRouter()
router.register(r'posts', views.TourismView, 'blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tourism/', include(router.urls))
]
