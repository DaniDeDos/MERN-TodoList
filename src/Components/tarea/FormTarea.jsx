import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { errortarea, agregarTarea, validarTarea, obtenerTareas } =
    tareasContext;

  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    obtenerTareas(proyectoActual.id);

    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className=""
            placeholder="nombre tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="submit"
            className=""
            placeholder="nombre tarea..."
            value="agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? <p>el nombre de la tarea es obligatorio</p> : null}
    </div>
  );
};

export default FormTarea;
