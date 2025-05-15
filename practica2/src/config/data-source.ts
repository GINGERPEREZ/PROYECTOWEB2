// Archivo: src/config/data-source.ts
import { DataSource } from "typeorm";
import { DatosMascota } from "../entity/DatosMascota";
import { HistorialMedico } from "../entity/HistorialMedico";
import { Vacunas } from "../entity/Vacunas";
import { Dieta } from "../entity/Dieta";
import { Alergias } from "../entity/Alergias";

export const AppDataSource = new DataSource({
  type: "postgres", // o "mysql"
  host: "localhost",
  port: 5432,
  username: "tu_usuario",
  password: "tu_password",
  database: "mascotas_db",
  synchronize: true,
  logging: false,
  entities: [DatosMascota, HistorialMedico, Vacunas, Dieta, Alergias],
});