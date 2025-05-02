from data.objetos import mascotas, historial1
from fuctions.operaciones import mostrar_mascotas, agregar_vacunas, procesar_mascotas, mostrar_datos_async
import asyncio

print("📋 Lista de mascotas:")
mostrar_mascotas(mascotas)

# Callback
print("\n🔄 Procesando mascotas con callback:")
procesar_mascotas(mascotas, lambda m: print(f"-> {m.nombre.upper()} es un {m.raza}"))

# Rest
print("\n💉 Agregando nuevas vacunas con operador REST:")
agregar_vacunas(historial1, "Moquillo", "Leptospirosis")
print("Vacunas actualizadas:", historial1.vacunas)

# Async/Await
print("\n⏳ Esperando carga de datos:")
asyncio.run(mostrar_datos_async())
