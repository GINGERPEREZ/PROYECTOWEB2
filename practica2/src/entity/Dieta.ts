// src/entity/Dieta.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DatosMascota } from "./DatosMascota";

@Entity()
export class Dieta {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => DatosMascota, mascota => mascota.dietas, { onDelete: "CASCADE" })
  mascota!: DatosMascota;

  @Column()
  tipo_alimento!: string;

  @Column()
  cantidad_diaria!: string;

  @Column()
  horario_comidas!: string;

  @Column("text", { nullable: true })
  restricciones!: string;
}
