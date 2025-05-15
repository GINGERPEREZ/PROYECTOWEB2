// src/crud/vacunaCrud.ts
import { AppDataSource } from "../config/data-source";
import { Vacunas } from "../entity/Vacunas";

const vacunasRepo = AppDataSource.getRepository(Vacunas);

export const crearVacuna = async (data: Partial<Vacunas>) => {
  const vacuna = vacunasRepo.create(data);
  return await vacunasRepo.save(vacuna);
};

export const obtenerVacunas = async () => {
  return await vacunasRepo.find({ relations: ["mascota"] });
};

export const actualizarVacuna = async (id: number, data: Partial<Vacunas>) => {
  await vacunasRepo.update(id, data);
  return await vacunasRepo.findOne({ where: { id } });
};

export const eliminarVacuna = async (id: number) => {
  return await vacunasRepo.delete(id);
};
