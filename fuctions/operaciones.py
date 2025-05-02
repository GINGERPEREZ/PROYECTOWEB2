# funciones/operaciones.py

def crear_mascota(nombre, raza, edad, sexo, descripcion):
    from interfaces.mascota import Mascota
    return Mascota(nombre, raza, edad, sexo, descripcion)

def mostrar_mascotas(mascotas):
    for mascota in mascotas:
        print(f"{mascota.nombre} ({mascota.raza}) - {mascota.edad} años")

# Spread (clonando arreglo)
def clonar_mascotas(lista_mascotas):
    return [*lista_mascotas]

# Rest (función con cantidad de parámetros variable)
def agregar_vacunas(historial, *nuevas_vacunas):
    historial.vacunas.extend(nuevas_vacunas)

# Callback
def procesar_mascotas(mascotas, callback):
    for mascota in mascotas:
        callback(mascota)

# Promesa simulada
import time
def cargar_datos_lentos():
    import threading
    from concurrent.futures import Future

    future = Future()

    def tarea():
        time.sleep(2)
        future.set_result("Datos cargados")

    threading.Thread(target=tarea).start()
    return future

# Async/Await
import asyncio

async def mostrar_datos_async():
    future = cargar_datos_lentos()
    resultado = await asyncio.wrap_future(future)
    print(resultado)
