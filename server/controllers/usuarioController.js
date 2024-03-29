const Usuario = require("../models/Usuario.js");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre, email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Correctly create a new Usuario instance before setting the password
    usuario = new Usuario({ nombre, email, password });

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    usuario.password = await bcryptjs.hash(password, salt);

    await usuario.save();

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

  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
