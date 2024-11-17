import { validationResult } from 'express-validator';
import Video from '../models/video.js';
import { uploadS3File } from '../services/s3Uploader.js';

export const createVideo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log('Body recibido:', req.body);
  console.log('File recibido:', req.file);

  const { title, genre, protagonist, director } = req.body;
  const fileName = req.file.originalname;

  try {
    if (!title || !genre || !protagonist || !director || !req.file) {
      return res.status(400).json({ mensaje: 'Faltan datos necesarios.' });
    }

    const resultadoS3 = await uploadS3File(fileName, req.file.buffer);
    console.log('Resultado S3:', resultadoS3);

    const video = new Video({
      file: fileName,
      title,
      genre,
      protagonist,
      director,
    });

    console.log('Video a guardar:', video);
    await video.save();

    res.status(200).json({ mensaje: 'Datos procesados exitosamente' });
  } catch (error) {
    console.error('Error al procesar:', error);
    res.status(500).json({ mensaje: 'Error al procesar los datos' });
  }
};
