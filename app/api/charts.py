from app.models.chart_model import ChartModel
from rest_framework import serializers
from rest_framework import generics

# Serializers
class ChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartModel
        fields = ('country','gold_medals','silver_medals','bronze_medals')

class ChartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChartModel.objects.all()
    serializer_class = ChartSerializer