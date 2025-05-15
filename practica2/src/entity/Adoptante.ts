import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Adopcion } from "./Adopcion";

@Entity()
export class Adoptante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  cedula!: string;

  @Column()
  direccion!: string;

  @Column()
  telefono!: string;

  @Column()
  correo!: string;

  @OneToMany(() => Adopcion, adopcion => adopcion.adoptante)
  adopciones!: Adopcion[];
}