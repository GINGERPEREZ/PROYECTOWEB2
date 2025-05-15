import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { HistorialMedico } from "./HistorialMedico";
import { Vacunas } from "./Vacunas";
import { Dieta } from "./Dieta";
import { Alergias } from "./Alergias";

@Entity()
export class DatosMascota {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  especie!: string;

  @Column()
  raza!: string;

  @Column()
  edad!: number;

  @Column()
  sexo!: string;

  @Column()
  color!: string;

  @Column({ type: "date" })
  fecha_ingreso!: Date;

  @OneToMany(() => HistorialMedico, (historial) => historial.mascota)
  historialMedicos!: HistorialMedico[];

  @OneToMany(() => Vacunas, (vacuna) => vacuna.mascota)
  vacunas!: Vacunas[];

  @OneToMany(() => Dieta, (dieta) => dieta.mascota)
  dietas!: Dieta[];

  @OneToMany(() => Alergias, (alergia) => alergia.mascota)
  alergias!: Alergias[];
}

