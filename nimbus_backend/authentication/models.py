from django.db import models 
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password # Applies a secure hashing algorithm , Adds random salt 


class User(AbstractUser):

    user_first_name = models.CharField(max_length=100)
    user_middle_name = models.CharField(max_length=100, blank=True, null=True)
    user_last_name = models.CharField(max_length=100)
    
    email = models.EmailField(unique=True, null=False)
    
    username = models.CharField(max_length=100,unique=True, blank=False, null=False)
    password = models.CharField(max_length=256)
    # is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

   
    EMAIL_FIELD = 'user_email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    # Securely handles password storage , hashes the password and stores it
    def set_password(self, raw_password):
        self.password = make_password(raw_password)
    
    def __str__(self):
        return f"{self.user_first_name} {self.user_last_name} ({self.user_email})"
    

class UserRole(models.Model):
    role_name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True,
        related_name='created_roles'
    )

    def __str__(self):
        return self.role_name


# junction model (bridge/through model) 
# that creates a many-to-many relationship between User and UserRole models

class UserRoleMapping(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='role_mappings'
    )
    role = models.ForeignKey(
        UserRole,
        on_delete=models.CASCADE,
        related_name='user_mappings'
    )
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.user.username} - {self.role.role_name}"


# tracks user login sessions 
class UserSession(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='sessions'
    )
    user_ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    session_is_active = models.BooleanField(default=True)
    session_created_at = models.DateTimeField(auto_now_add=True)
    session_expires_at = models.DateTimeField()

    def __str__(self):
        return f"Session for {self.user.username} ({'active' if self.session_is_active else 'inactive'})"
