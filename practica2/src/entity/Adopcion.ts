
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { DatosMascota } from "./DatosMascota";
import { Adoptante } from "./Adoptante";

@Entity()
export class Adopcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => DatosMascota, { onDelete: "CASCADE" })
  @JoinColumn()
  mascota!: DatosMascota;

  @ManyToOne(() => Adoptante, adoptante => adoptante.adopciones, { onDelete: "CASCADE" })
  adoptante!: Adoptante;

  @Column({ type: "date" })
  fecha_adopcion!: Date;

  @Column("text", { nullable: true })
  observaciones!: string;
}