import { Router } from 'express';
import { MascotaController } from '../controllers/MascotaController';

const router = Router();
const controller = new MascotaController();

router.get('/:id', controller.getById);
router.get('/', controller.getAll);

export default router;