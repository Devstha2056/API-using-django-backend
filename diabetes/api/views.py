from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
import os
import joblib
from.serializers import diabetesserializers


model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','Model','trained_model.pkl')

model=joblib.load(model_path)

@api_view(['POST'])
def predict(request):
    if request.method=='POST':
        serializers=diabetesserializers(data=request.data)
        if serializers.is_valid():
            input_data=tuple(serializers.validated_data.values())
            input_data_as_numpy_array = np.assarray(input_data)
            input_data_reshaped = input_data_as_numpy_array.reshaped(1,-1)
            print(input_data_reshaped)
        prediction=model.predict(input_data_reshaped)
        return Response(prediction)