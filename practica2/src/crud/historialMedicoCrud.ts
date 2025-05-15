// src/crud/historialMedicoCrud.ts
import { AppDataSource } from "../config/data-source";
import { HistorialMedico } from "../entity/HistorialMedico";

const historialRepo = AppDataSource.getRepository(HistorialMedico);

export const crearHistorial = async (data: Partial<HistorialMedico>) => {
  const historial = historialRepo.create(data);
  return await historialRepo.save(historial);
};

export const obtenerHistoriales = async () => {
  return await historialRepo.find({ relations: ["mascota"] });
};

export const actualizarHistorial = async (id: number, data: Partial<HistorialMedico>) => {
  await historialRepo.update(id, data);
  return await historialRepo.findOne({ where: { id } });
};

export const eliminarHistorial = async (id: number) => {
  return await historialRepo.delete(id);
};
