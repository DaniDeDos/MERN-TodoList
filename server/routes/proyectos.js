const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middlewares/auth");
const { check } = require("express-validator");

// api/proyectos
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.crearProyecto
);

// Obtener proyecto por id:
router.get("/:id", proyectoController.getProyecto);

// Obtener todos los proyectos
router.get("/", auth, proyectoController.obtenerProyectos);

// Actualiza los proyectos
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.actualizarProyectos
);

// Eliminar un proyecto
router.delete("/:id", auth, proyectoController.eliminarProyectos);

module.exports = router;
