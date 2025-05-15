// src/entity/HistorialMedico.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DatosMascota } from "./DatosMascota";

@Entity()
export class HistorialMedico {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => DatosMascota, mascota => mascota.historialMedicos, { onDelete: "CASCADE" })
  mascota!: DatosMascota;

  @Column("text")
  diagnosticos!: string;

  @Column("text")
  tratamientos!: string;

  @Column({ type: "date" })
  fecha_registro!: Date;

  @Column()
  veterinario!: string;
}
