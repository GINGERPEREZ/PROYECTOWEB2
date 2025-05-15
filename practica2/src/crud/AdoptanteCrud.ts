import { AppDataSource } from "../config/data-source";
import { Adoptante } from "../entity/Adoptante";

const adoptanteRepo = AppDataSource.getRepository(Adoptante);

export const crearAdoptante = async (data: Partial<Adoptante>) => adoptanteRepo.save(adoptanteRepo.create(data));
export const obtenerAdoptantes = async () => adoptanteRepo.find({ relations: ["adopciones"] });
export const actualizarAdoptante = async (id: number, data: Partial<Adoptante>) => {
  await adoptanteRepo.update(id, data);
  return adoptanteRepo.findOneBy({ id });
  };
export const eliminarAdoptante = async (id: number) => adoptanteRepo.delete(id);