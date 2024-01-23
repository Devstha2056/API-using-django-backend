from rest_framework import serializers
from .models import diabetes

class diabetesserializers(serializers.ModelSerializer):
    class meta:
        model=diabetes
        fields ='__all__'