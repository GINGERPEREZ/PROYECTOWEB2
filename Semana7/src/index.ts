import express from 'express';
//import cors from 'cors';
import dotenv from 'dotenv';
import MascotaRoutes from '../src/presentation/routes/MascotaRoute';
import { sequelize } from '../src/infractructure/datebase/sequelize';
//import { UserModel } from './infrastructure/database/models/UserModel';

dotenv.config();

const app = express();
//app.use(cors());
app.use(express.json());

app.use('/mascota', MascotaRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
     await sequelize.authenticate();
     await sequelize.sync(); // ¡Asegúrate de usar migraciones en producción!
    console.log('DB connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();