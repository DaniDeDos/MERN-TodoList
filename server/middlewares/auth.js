const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //leer el token del header

  const token = req.header("x-auth-token");

  // Revisar si existe token
  if (!token) {
    return res.status(401).json({ msg: "No hay token permiso denegado" });
  }
  // Validar el token
  try {
    const cifrado = jwt.verify(token, process.env.SECRETO);
    req.usuario = cifrado.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msm: "Token no valido" });
  }
};
