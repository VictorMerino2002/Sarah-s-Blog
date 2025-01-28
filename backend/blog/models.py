from django.db import models

class Tourism(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateTimeField()
    content = models.BinaryField()

    def __str__(self):
        return self.title
    
class Magazine(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateTimeField()
    content = models.BinaryField()

    def __str__(self):
        return self.title
    
class Journal(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateTimeField()
    content = models.BinaryField()

    def __str__(self):
        return self.title
    
class Subscriber(models.Model):
    email = models.EmailField(unique=True)

    def save(self, *args, **kwargs):
        self.email = self.email.lower()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email