import React, { useState, useEffect, useContext } from "react";
import tareaContext from "../../../context/tareas/tareaContext.js";
import ProyectoContext from "../../../context/proyectos/proyectoContext.js";
import AlertaContext from "../../../context/alerts/alertaContext.js";
import { Link, useParams } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import Titulo from "../../layout/Titulo.jsx";
import TareaNueva from "./TareaNueva.jsx";

const Tarea = () => {
  const { id } = useParams();
  const proyectoId = id;

  const proyectosContext = useContext(ProyectoContext);
  const { getProyecto, proyecto } = proyectosContext;

  const [estadoButtonTheme, setEstadoButtonTheme] = useState("");
  const [estadoSpanTheme, setEstadoSpanTheme] = useState("");

  const tareasContext = useContext(tareaContext);
  const {
    eliminarTarea,
    guardarTareaActual,
    tareasproyecto,
    obtenerTareas,
    actualizarTarea,
  } = tareasContext;

  useEffect(() => {
    if (proyectoId) {
      obtenerTareas(proyectoId);
    }
  }, [proyectoId, obtenerTareas]);

  useEffect(() => {
    if (proyectoId) {
      getProyecto(proyectoId);
    }
  }, [proyectoId, getProyecto]);

  // Asegurarse de que tareasproyecto está definido antes de usarlo
  if (!tareasproyecto) return <h2>Cargando tareas...</h2>;
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoId);
    obtenerTareas(proyectoId);
  };

  const getEstado = (estado) => {
    if (estado) {
      return "completada";
    } else {
      return "incompleta";
    }
  };

  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  const cambiarEstado = (tarea) => {
    // Cambiar el estado de la tarea
    tarea.estado = !tarea.estado;

    // Actualizar el tema del botón y del span basado en el nuevo estado
    if (tarea.estado) {
      setEstadoButtonTheme("bg-green-100 text-green-800");
      setEstadoSpanTheme("bg-green-500");
    } else {
      setEstadoButtonTheme("bg-red-100 text-red-800");
      setEstadoSpanTheme("bg-red-500");
    }

    // Actualizar la tarea en el contexto
    actualizarTarea(tarea);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Titulo
          titulo={proyecto ? proyecto.nombre : "Nombre del Proyecto"}
          descripcion={"Lista de tareas"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <TareaNueva id={proyectoId} />

          {tareasproyecto.map((tarea) => (
            <div className="block max-w-sm p-6 bg-primary-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <div className="flex flex-col items-center pb-10 text-center">
                <li className="list-none" key={tarea._id}>
                  <div className="flex items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-50">
                      {tarea.nombre}
                    </h5>
                  </div>
                  <p className="font-normal text-gray-700">descripcion</p>
                  <div className="items-center">
                    <div className="pt-0.5">
                      <button
                        type="button"
                        className={`inline-flex items-center ${estadoButtonTheme} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                        onClick={() => cambiarEstado(tarea)}
                      >
                        <span
                          className={`w-2 h-2 me-1 rounded-full ${estadoSpanTheme}`}
                        ></span>
                        {getEstado(tarea.estado)}
                      </button>
                    </div>
                    <div className="mt-4 mx-auto flex text-center justify-center space-x-4">
                      <Link
                        className="inline-flex items-center px-3 py-3 text-base font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800"
                        type="button"
                        to={`/proyecto/tarea/form-tarea/${proyectoId}`}
                        onClick={() => seleccionarTarea(tarea)}
                      >
                        <MdEdit />
                      </Link>

                      <button
                        className="inline-flex items-center px-3 py-3 text-base font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-red-600"
                        type="button"
                        onClick={() => tareaEliminar(tarea._id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tarea;
