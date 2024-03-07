const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

exports.crearProyecto = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    const proyecto = new Proyecto(req.body);

    //Guardar al creador
    proyecto.creador = req.usuario.id;

    //Guardar el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

// Obtener todos los proyectos
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({
      creador: -1,
    });

    res.json({ proyectos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Actualiza los proyectos
exports.actualizarProyectos = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer info
  const { nombre } = req.body;
  const nuevoProyecto = {};

  if (nombre) {
    nuevoProyecto.nombre = nombre;
  }

  try {
    //revisar el id
    let proyecto = await Proyecto.findById(req.params.id);

    // si el proyecto existe
    if (!proyecto) {
      return res.status(404).json({ masg: "Proyecto no encontrado" });
    }

    //verificar creador
    if (proyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ masg: "no autorizado" });
    }

    //actualizar
    proyecto = await Proyecto.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProyecto },
      { new: true }
    );

    res.json({ proyecto });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Elimina un proyecto por su Id
exports.eliminarProyectos = async (req, res) => {
  try {
    //revisar el id
    let proyecto = await Proyecto.findById(req.params.id);

    // si el proyecto existe
    if (!proyecto) {
      return res.status(404).json({ masg: "Proyecto no encontrado" });
    }

    //verificar creador
    if (proyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ masg: "no autorizado" });
    }

    //Eliminar el proyecto
    await Proyecto.findByIdAndDelete(req.params.id);
    res.json({ msg: "Proyecto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
