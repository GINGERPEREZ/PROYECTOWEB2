// src/crud/datosMascotaCrud.ts
import { AppDataSource } from "../config/data-source";
import { DatosMascota } from "../entity/DatosMascota";

const datosMascotaRepo = AppDataSource.getRepository(DatosMascota);

export const crearMascota = async (data: Partial<DatosMascota>) => {
  const mascota = datosMascotaRepo.create(data);
  return await datosMascotaRepo.save(mascota);
};

export const obtenerMascotas = async () => {
  return await datosMascotaRepo.find({
    relations: ["historialMedicos", "vacunas", "dietas", "alergias"],
  });
};

export const actualizarMascota = async (id: number, data: Partial<DatosMascota>) => {
  await datosMascotaRepo.update(id, data);
  return await datosMascotaRepo.findOne({ where: { id } });
};

export const eliminarMascota = async (id: number) => {
  return await datosMascotaRepo.delete(id);
};
