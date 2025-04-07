from django.urls import path
from .views import SignupView, LoginView, LogoutView, DeleteUserAccountView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('delete_user_account/', DeleteUserAccountView.as_view(), name='delete_account'),
]
