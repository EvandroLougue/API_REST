import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);

export default router;

/*
.index => listar todos => GET
.store/.create => criar novo => POST
.delete => apaga um => DELETE
.show => mostra um => GET
.update => atualiza um => PATCH ou PUT
*/
