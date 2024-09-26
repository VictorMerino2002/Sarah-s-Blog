from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from blog import views
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'posts', views.TourismView, 'blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tourism/', include(router.urls)),
    path('api/token/', obtain_auth_token),
]
