// src/entity/Vacunas.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DatosMascota } from "./DatosMascota";

@Entity()
export class Vacunas {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => DatosMascota, mascota => mascota.vacunas, { onDelete: "CASCADE" })
  mascota!: DatosMascota;

  @Column()
  tipo_vacuna!: string;

  @Column({ type: "date" })
  fecha_aplicacion!: Date;

  @Column({ type: "date", nullable: true })
  proxima_dosis!: Date;

  @Column("text", { nullable: true })
  observaciones!: string;
}
