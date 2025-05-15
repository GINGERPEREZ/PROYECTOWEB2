import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DatosMascota } from "./DatosMascota";

@Entity()
export class Alergias {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => DatosMascota, mascota => mascota.alergias, { onDelete: "CASCADE" })
  mascota!: DatosMascota;

  @Column()
  tipo_alergia!: string;

  @Column("text")
  descripcion!: string;

  @Column("text")
  reacciones!: string;

  @Column("text", { nullable: true })
  tratamiento!: string;
}

