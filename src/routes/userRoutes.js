import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Apenas para teste, não necessário em códigos reais

router.get('/', userController.index); // listar todos
router.get('/:id', userController.show); // lista um

// Indispensável
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
.index => listar todos => GET
.store/.create => criar novo => POST
.delete => apaga um => DELETE
.show => mostra um => GET
.update => atualiza um => PATCH ou PUT
*/
