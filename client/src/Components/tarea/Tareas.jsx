import React, { useEffect, useContext } from "react";
//import Tarea from "./Tarea.jsx";
import tareaContext from "../../context/tareas/tareaContext.js";
import proyectoContext from "../../context/proyectos/proyectoContext";
import AlertaContext from "../../context/alerts/alertaContext.js";
import { Link, useParams } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import Titulo from "../layout/Titulo.jsx";
import TareaNueva from "./TareaNueva.jsx";

const Tareas = () => {
  const { id } = useParams();
  const proyectoId = id;

  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, tareasproyecto, obtenerTareas } = tareasContext;

  useEffect(() => {
    if (proyectoId) {
      obtenerTareas(proyectoId);
    }
  }, [proyectoId, obtenerTareas]);

  // Asegurarse de que tareasproyecto está definido antes de usarlo
  if (!tareasproyecto) return <h2>Cargando tareas...</h2>;
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoId);
    obtenerTareas(proyectoId);
  };

  const getEstado = (estado) => {
    if (estado) {
      return "completado";
    } else {
      return "incompleto";
    }
  };

  const getEstadoTeme = (estado) => {
    if (estado) {
      return "completado";
    } else {
      return "incompleto";
    }
  };


  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Titulo titulo={"Nombre del Proyecto"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <TareaNueva id={proyectoId} />

          {tareasproyecto.map((tarea) => (
            <div className="block max-w-sm p-6 bg-primary-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <div className="flex flex-col items-center pb-10">
                <li className="list-none" key={tarea._id}>
                  <div className="flex items-baseline">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-50">
                      {tarea.nombre}
                    </h5>
                    <AiOutlinePushpin />
                  </div>
                  <p className="font-normal text-gray-700">descripcion</p>
                  <div>
                    {tarea.estado ? (
                      <button
                        type="button"
                        onClick={() => cambiarEstado(tarea)}
                      >
                        Completo
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        onClick={() => cambiarEstado(tarea)}
                      >
                        <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                        {getEstado(tarea.estado)}
                      </button>
                    )}
                  </div>

                  <div>
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800"
                      type="button"
                      onClick={() => seleccionarTarea(tarea)}
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800"
                      type="button"
                      onClick={() => tareaEliminar(tarea._id)}
                    >
                      <MdDelete />
                    </button>
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

export default Tareas;
/*
<span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
  <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
    Unavailable
</span>
*/
