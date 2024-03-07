const Usuario = require("../models/Usuario.js");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    // Revisa email
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ msg: "El email es incorrecto" });
    }

    // Revisa password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);

    if (!passCorrecto) {
      return res.status(400).json({ msg: "El password es incorrecto" });
    }

    // Crear y firmar JWT
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    // Firmar JWT
    jwt.sign(
      payload,
      process.env.SECRETO,
      {
        expiresIn: 3600, //1h
      },
      (error, token) => {
        if (error) throw error;

        res.json({ token });
      }
    );
  } catch (error) {}
};
