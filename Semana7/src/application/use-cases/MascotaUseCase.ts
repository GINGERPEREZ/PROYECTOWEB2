import { Mascota } from '../../domain/entities/Mascota';
import { MascotaRepository } from '../../domain/repositories/MascotaRepository';

export class MascotaUseCase {
  constructor(private mascotaRepository: MascotaRepository) {}

  async getById(id: number): Promise<Mascota | null> {
    return this.mascotaRepository.getById(id);
  }

  async getAll(): Promise<Mascota[]> {
    return this.mascotaRepository.getAll();
  }

  async create(mascota: Mascota): Promise<Mascota> {
    return this.mascotaRepository.create(mascota);
  }

}