export const verificarJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ mensaje: 'Token no proporcionado' });
  }

  if (token === 'tokenficticio') {
    req.user = { id: '12345', nombre: 'Juan Pérez' };  
    next();
  } else {
    return res.status(401).json({ mensaje: 'Token inválido' });
  }
};
