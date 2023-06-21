from django.contrib import admin
from .models import Usuario, Proveedor, Producto, Servicio, Pedido, Categoria

admin.site.register(Usuario)
admin.site.register(Proveedor)
admin.site.register(Producto)
admin.site.register(Servicio)
admin.site.register(Pedido)
admin.site.register(Categoria)