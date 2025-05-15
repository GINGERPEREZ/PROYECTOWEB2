import { AppDataSource } from "../config/data-source";
import { DatosMascota } from "../entity/DatosMascota";
import { HistorialMedico } from "../entity/HistorialMedico";
import { Vacunas } from "../entity/Vacunas";
import { Dieta } from "../entity/Dieta";
import { Alergias } from "../entity/Alergias";
import { Adopcion } from "../entity/Adopcion";
import { Adoptante } from "../entity/Adoptante";

const mascotaRepo = AppDataSource.getRepository(DatosMascota);
const historialRepo = AppDataSource.getRepository(HistorialMedico);
const vacunasRepo = AppDataSource.getRepository(Vacunas);
const dietaRepo = AppDataSource.getRepository(Dieta);
const alergiasRepo = AppDataSource.getRepository(Alergias);
const adopcionRepo = AppDataSource.getRepository(Adopcion);
const adoptanteRepo = AppDataSource.getRepository(Adoptante);