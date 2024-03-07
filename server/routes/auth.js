const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");
const auth = require("../middlewares/auth");

// api/auth
// iniciar sesion
router.post(
  "/",
  [
    check("email", "El email valido").isEmail(),
    check("password", "El password debe ser minimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  authController.autenticarUsuario
);

// obtener usuario autenticado
router.get(
  "/",
  auth,
  authController.usuarioAutenticado
);

module.exports = router;
