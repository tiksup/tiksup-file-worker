const express = require('express');
const { body } = require('express-validator');
const videoController = require('../controllers/videoController');
const verificarJWT = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.use(express.json());  
router.use(express.urlencoded({ extended: true }));

router.post(
  '/api/videos',
  verificarJWT,
  upload.single('file'),
  [
    body('title').notEmpty().withMessage('El título es obligatorio'),
    body('genre').isArray().withMessage('El género debe ser un array').notEmpty().withMessage('El género es obligatorio'),
    body('protagonist').notEmpty().withMessage('El protagonista es obligatorio'),
    body('director').notEmpty().withMessage('El director es obligatorio')
  ],
  videoController.createVideo
);

module.exports = router;
