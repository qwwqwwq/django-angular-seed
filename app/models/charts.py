from app.models import Model
from django.db import models

class ChartModel(Model):
    country = models.CharField(max_length=255)
    gold_medals = models.IntegerField()
    silver_medals = models.IntegerField()
    bronze_medals = models.IntegerField()