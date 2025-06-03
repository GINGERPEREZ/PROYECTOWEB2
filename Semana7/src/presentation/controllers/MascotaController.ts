import { Request, Response } from 'express';
import { SequelizeMascotaRepository } from '../../domain/repositories/SequelizeMascotaRepository';
import { MascotaUseCase } from '../../application/use-cases/MascotaUseCase';
import { Mascota } from '../../domain/entities/Mascota';


export class MascotaController {
  private readonly mascotaUseCase: MascotaUseCase;

  constructor() {
    const mascotaRepository = new SequelizeMascotaRepository();
    this.mascotaUseCase = new MascotaUseCase(mascotaRepository);
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const mascotas = await this.mascotaUseCase.getAll();
      res.json(mascotas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener las mascotas' });
    }
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ message: 'ID inválido' });
      return;
    }

    try {
      const mascota = await this.mascotaUseCase.getById(id);
      if (!mascota) {
        res.status(404).json({ message: 'Mascota no encontrada' });
        return;
      }
      res.json(mascota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener la mascota' });
    }
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const { nombre, tipo, edad } = req.body;

    if (!nombre || !tipo || typeof edad !== 'number') {
      res.status(400).json({ message: 'Datos inválidos' });
      return;
    }

    try {
      const nuevaMascota: Mascota = {
        id: 0,
        nombre
      };

      const created = await this.mascotaUseCase.create(nuevaMascota);
      res.status(201).json(created);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la mascota' });
    }
  };
}
