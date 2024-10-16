from django.db import models

class Tourism(models.Model):
    location = models.CharField(max_length=150)
    date = models.DateTimeField()
    content = models.JSONField()

    def __str__(self):
        return self.date
    
class Magazine(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateTimeField()
    content = models.BinaryField()

    def __str__(self):
        return self.title