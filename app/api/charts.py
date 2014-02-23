from app.models.chart_model import ChartModel
from rest_framework import serializers
from rest_framework import generics

# Serializers
class ChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartModel
        fields = ('id', 'country','gold_medals','silver_medals','bronze_medals')

class ChartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChartModel.objects.all()
    serializer_class = ChartSerializer

class ChartList(generics.ListCreateAPIView):
    """
    API endpoint that represents a list of possible charts
    """
    model = ChartModel
    serializer_class = ChartSerializer 