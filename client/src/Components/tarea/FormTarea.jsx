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

    tarea.proyecto = proyectoActual._id;
    tarea.estado = false;
    agregarTarea(tarea);

    obtenerTareas(proyectoActual._id);

    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre de la tarea
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nombre de la tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="text-red-500 text-xs italic">
          El nombre de la tarea es obligatorio
        </p>
      ) : null}
    </div>
  );
};

export default FormTarea;
