import React, { useContext, useEffect } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Headings from "./Headings.jsx";
import { TiFolderDelete } from "react-icons/ti";
import AlertaContext from "../../context/alerts/alertaContext.js";
import { Link } from "react-router-dom";

const ListadoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const {
    mensaje,
    proyectos,
    obtenerProyectos,
    proyectoActual,
    eliminarProyecto,
  } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
  }, [mensaje]);

  const onClickEliminar = (id) => {
    eliminarProyecto(id);
  };

  if (proyectos.length === 0)
    return (
      <>
        <Headings />
      </>
    );

  const seleccionarProyecto = (e, id) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace
    proyectoActual(id);
    obtenerTareas(id);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {alerta ? <div>{alerta.msg}</div> : null}
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
        Lista de proyectos
      </h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar Proyectos..."
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Categoría
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proyecto) => (
              <tr key={proyecto._id} className="bg-white border-b">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {proyecto.nombre}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">React Developer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Completado
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => onClickEliminar(proyecto._id)}
                    >
                      <TiFolderDelete />
                    </button>
                    <Link
                      to={`/tarea/${proyecto._id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Tarea
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoProyecto;

//onClick={(e) => seleccionarProyecto(e, proyecto._id)}
