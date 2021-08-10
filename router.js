import Router from 'express';
import PostController from './PostController.js';

const router = new Router();

router.post('/post', PostController.create);
router.get('/post', PostController.getAll);
router.get('/post/:name', PostController.getOne);
router.put('/post', PostController.update);
router.delete('/post/:name', PostController.delete);

export default router;