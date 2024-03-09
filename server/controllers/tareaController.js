const Proyecto = require("../models/Proyecto");
const Tarea = require("../models/Tarea");
const { validationResult } = require("express-validator");

exports.crearTarea = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //comprobar si existe el proyecto
    const { proyecto } = req.body;
    const esisteProyecto = await Proyecto.findById(proyecto);
    if (!esisteProyecto) {
      return res.status(404).json({ msg: "Proyecto no encontrado" });
    }

    // Asegurarse de que req.usuario y req.usuario.id están definidos
    if (!req.usuario || !req.usuario.id) {
      return res.status(401).json({ masg: "Usuario no autorizado" });
    }

    // revisar q sea el proyecto del usuario correspondiente
    //verificar creador
    if (esisteProyecto.creador.toString() !== req.usuario.id.toString()) {
      return res.status(401).json({ masg: "no autorizado" });
    }

    // Crear tarea
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Obtener las tareas
exports.obtenerTarea = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //comprobar si existe el proyecto
    const { proyecto } = req.query;
    const esisteProyecto = await Proyecto.findById(proyecto);
    if (!esisteProyecto) {
      return res.status(404).json({ msg: "Proyecto no encontrado" });
    }

    // Asegurarse de que req.usuario y req.usuario.id están definidos
    if (!req.usuario || !req.usuario.id) {
      return res.status(401).json({ masg: "Usuario no autorizado" });
    }

    //Obtener las tareas por proyecto
    const tareas = await Tarea.find({ proyecto }).sort({ creado: -1 });
    res.json({ tareas });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Actualizar tarea
exports.actualizarTarea = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //comprobar si existe la tarea
    const { proyecto, nombre, estado } = req.body;
    const esisteTarea = await Tarea.findById(req.params.id);
    if (!esisteTarea) {
      return res.status(404).json({ msg: "Tarea no encontrado" });
    }

    // Asegurarse de que req.usuario y req.usuario.id están definidos
    if (!req.usuario || !req.usuario.id) {
      return res.status(401).json({ masg: "Usuario no autorizado" });
    }

    //crear objeto con la nueva info

    nuevaTarea.nombre = nombre;
    nuevaTarea.estado = estado;

    //Actualizar Tarea
    let tarea = await Tarea.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevaTarea },
      { new: true }
    );

    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Eliminar tarea
exports.eliminarTarea = async (req, res) => {
  try {
    //comprobar si existe la tarea
    const { proyecto } = req.query;

    const existeProyecto = await Proyecto.findById(proyecto);
    // Verificar si existeProyecto es null antes de acceder a sus propiedades
    if (!existeProyecto) {
      return res.status(404).json({ masg: "Proyecto no encontrado" });
    }

    // Asegurarse de que req.usuario y req.usuario.id están definidos
    if (!req.usuario || !req.usuario.id) {
      return res.status(401).json({ masg: "Usuario no autorizado" });
    }

    // Verificar si el creador del proyecto coincide con el id del usuario
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ masg: "No autorizado" });
    }

    //Eliminar Tarea
    await Tarea.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Tarea eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
