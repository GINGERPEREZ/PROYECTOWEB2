import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión a la base de datos exitosa.");
  })
  .catch((error) => console.error("Error en la conexión:", error));
