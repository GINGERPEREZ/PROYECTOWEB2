// src/crud/alergiaCrud.ts
import { AppDataSource } from "../config/data-source";
import { Alergias } from "../entity/Alergias";

const alergiasRepo = AppDataSource.getRepository(Alergias);

export const crearAlergia = async (data: Partial<Alergias>) => {
  const alergia = alergiasRepo.create(data);
  return await alergiasRepo.save(alergia);
};

export const obtenerAlergias = async () => {
  return await alergiasRepo.find({ relations: ["mascota"] });
};

export const actualizarAlergia = async (id: number, data: Partial<Alergias>) => {
  await alergiasRepo.update(id, data);
  return await alergiasRepo.findOne({ where: { id } });
};

export const eliminarAlergia = async (id: number) => {
  return await alergiasRepo.delete(id);
};
