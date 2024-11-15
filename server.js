const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  
const videoRoutes = require('./routes/videoRoutes');

dotenv.config();
const app = express();
const port = 3000;

connectDB();  

app.use(express.json());  
app.use(videoRoutes); 

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
