import { AppDataSource } from "../config/data-source";
import { Adopcion } from "../entity/Adopcion";

const adopcionRepo = AppDataSource.getRepository(Adopcion);

export const crearAdopcion = async (data: Partial<Adopcion>) => adopcionRepo.save(adopcionRepo.create(data));
export const obtenerAdopciones = async () => adopcionRepo.find({ relations: ["mascota", "adoptante"] });
export const actualizarAdopcion = async (id: number, data: Partial<Adopcion>) => {
  await adopcionRepo.update(id, data);
  return adopcionRepo.findOneBy({ id });
};
export const eliminarAdopcion = async (id: number) => adopcionRepo.delete(id);
