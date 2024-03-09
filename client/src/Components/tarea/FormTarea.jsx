import React, { useContext, useState, useEffect } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import Titulo from "../layout/Titulo";
import { useParams } from "react-router-dom";

const FormTarea = () => {
  const { id } = useParams();
  const proyectoId = id;

  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
        descripcion: "",
      });
    }
  }, [tareaseleccionada]);

  const [tarea, guardarTarea] = useState({
    nombre: "",
    descripcion: "",
  });

  const { nombre, descripcion } = tarea;

  if (!proyectoId) return null;

  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || descripcion.trim() === "") {
      validarTarea();
      return;
    }

    if (tareaseleccionada === null) {
      tarea.proyecto = proyectoId;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
      limpiarTarea();
    }

    obtenerTareas(proyectoId);

    guardarTarea({
      nombre: "",
      descripcion: "",
    });
  };



  return (
    <>
      <Titulo titulo={"Nombre del Proyecto"} />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="tarea-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="name"
                  autoComplete="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="ej: nombre de la tarea"
                  required=""
                  value={nombre}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="descripcion"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Descripción
                </label>
                <input
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  autoComplete="tareadescripcion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="ej: descripcion de la tarea"
                  required=""
                  value={descripcion}
                  onChange={handleChange}
                />
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => tareaEliminar(tarea._id)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Crear tarea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTarea;
