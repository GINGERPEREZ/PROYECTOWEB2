from interfaces.mascota import Mascota
from interfaces.dueno import Dueno
from interfaces.historial_medico import HistorialMedico


nombre_mascota = "Fido"
edad_mascota = 3


mascota1 = Mascota("Fido", "Labrador", 3, "Macho", "Juguetón y obediente")
dueno1 = Dueno("Juan Pérez", "987654321", "Av. Siempre Viva 123")
historial1 = HistorialMedico(["Rabia", "Parvovirus"], ["Otitis"], ["Antibióticos"])


mascotas = [
    mascota1,
    Mascota("Luna", "Poodle", 5, "Hembra", "Tranquila"),
    Mascota("Max", "Pastor Alemán", 2, "Macho", "Guardia leal")
]
