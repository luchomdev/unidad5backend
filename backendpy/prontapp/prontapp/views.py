from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework import generics
from django.contrib.auth import views as auth_views
from django.http import JsonResponse
from .models import Producto, Servicio, Categoria
from .serializers import ProductoSerializer, ServicioSerializer, CategoriaSerializer

from django.shortcuts import render



def index(request):
    return render(request, 'index.html')

class ProductoListAPIView(APIView):
    def get(self, request):
        productos = Producto.objects.all() 
        serializer = ProductoSerializer(productos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductoDetailAPIView(APIView):
    def get(self, request, pk):
        producto = Producto.objects.get(pk=pk)
        serializer = ProductoSerializer(producto)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        producto = Producto.objects.get(pk=pk)
        serializer = ProductoSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        producto = Producto.objects.get(pk=pk)
        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ServicioListAPIView(APIView):
    def get(self, request):
        servicios = Servicio.objects.all()
        serializer = ServicioSerializer(servicios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ServicioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ServicioDetailAPIView(APIView):
    def get(self, request, pk):
        servicio = Servicio.objects.get(pk=pk)
        serializer = ServicioSerializer(servicio)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        servicio = Servicio.objects.get(pk=pk)
        serializer = ServicioSerializer(servicio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        servicio = Servicio.objects.get(pk=pk)
        servicio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CategoriaListAPIView(APIView):
    def get(self, request):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
"""class LoginView(generics.CreateAPIView):

    def get(self, request, *args, **kwargs):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            token = 'some-random-token'
            return Response({'token': token})
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)"""

def login_view(request):
    # Obtén los datos de inicio de sesión del cuerpo de la solicitud
    username = request.POST.get('username')
    password = request.POST.get('password')

    # Realiza la lógica de autenticación
    if username == 'admin' and password == 'admin123':
        # Autenticación exitosa
        return JsonResponse({'success': True})
    else:
        # Autenticación fallida
        return JsonResponse({'success': False, 'error': 'Credenciales inválidas'})