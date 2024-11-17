import express from 'express';
import { body } from 'express-validator';
import { createVideo } from '../controllers/videoController.js';
import { verificarJWT } from '../middlewares/authMiddleware.js';
import { multerMiddleware } from '../middlewares/multer.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post(
  '/api/videos',
  verificarJWT, 
  multerMiddleware(),
  [
    body('title').notEmpty().withMessage('El título es obligatorio'),
    body('genre').isArray().withMessage('El género debe ser un array').notEmpty().withMessage('El género es obligatorio'),
    body('protagonist').notEmpty().withMessage('El protagonista es obligatorio'),
    body('director').notEmpty().withMessage('El director es obligatorio')
  ],
  createVideo
);

export default router;
