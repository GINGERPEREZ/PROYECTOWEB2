import { Mascota } from '../entities/Mascota';

export interface MascotaRepository {
  getById(id: number): Promise<Mascota | null>;
  getAll(): Promise<Mascota[]>;
  create(mascota: Mascota): Promise<Mascota>;
}