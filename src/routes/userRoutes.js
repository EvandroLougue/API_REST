import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.store);

export default router;

/*
.index => listar todos => GET
.store/.create => criar novo => POST
.delete => apaga um => DELETE
.show => mostra um
.update => atualiza um
*/
