import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
.index => listar todos => GET
.store/.create => criar novo => POST
.delete => apaga um => DELETE
.show => mostra um => GET
.update => atualiza um => PATCH ou PUT
*/
