import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import videoRoutes from './routes/videoRoutes.js';

dotenv.config();
const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(videoRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
