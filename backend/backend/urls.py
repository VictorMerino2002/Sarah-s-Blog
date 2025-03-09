from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from blog import views
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'tourism', views.TourismView, 'tourism')
router.register(r'journal', views.JournalView, 'journal')
router.register(r'magazines', views.MagazineView, 'magazines')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', obtain_auth_token),
    path('sub/add/', views.add_subscriber, name='add_subscriber'),
    path('sub/delete/<str:email>/', views.delete_subscriber, name='delete_subscriber')
]