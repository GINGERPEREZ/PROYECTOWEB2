import { MascotaRepository } from '../../domain/repositories/MascotaRepository';
import { Mascota } from '../../domain/entities/Mascota';
import { MascotaModel } from '../../infractructure/datebase/models/MascotaModel';

export class SequelizeMascotaRepository implements MascotaRepository {
  async getById(id: number): Promise<Mascota | null> {
    const user = await MascotaModel.findByPk(id);
    return user ? user.toJSON() as Mascota : null;
  }

  async getAll(): Promise<Mascota[]> {
    const mascotas = await MascotaModel.findAll();
    return mascotas.map(u => u.toJSON() as Mascota);
  }
async create(mascota: Mascota): Promise<Mascota> {
    const { nombre} = mascota;
    const created = await MascotaModel.create({ name});
    return created.toJSON() as Mascota;
  }
}