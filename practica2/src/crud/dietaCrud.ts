// src/crud/dietaCrud.ts
import { AppDataSource } from "../config/data-source";
import { Dieta } from "../entity/Dieta";

const dietaRepo = AppDataSource.getRepository(Dieta);

export const crearDieta = async (data: Partial<Dieta>) => {
  const dieta = dietaRepo.create(data);
  return await dietaRepo.save(dieta);
};

export const obtenerDietas = async () => {
  return await dietaRepo.find({ relations: ["mascota"] });
};

export const actualizarDieta = async (id: number, data: Partial<Dieta>) => {
  await dietaRepo.update(id, data);
  return await dietaRepo.findOne({ where: { id } });
};

export const eliminarDieta = async (id: number) => {
  return await dietaRepo.delete(id);
};
