import React, { useContext, useEffect } from "react";
import proyectoContext from "../../../context/proyectos/proyectoContext.js";
import { MdFolderDelete } from "react-icons/md";
import AlertaContext from "../../../context/alerts/alertaContext.js";
import { Link } from "react-router-dom";
import Titulo from "../../layout/Titulo.jsx";
import AuthContext from "../../../context/auth/authContext.js";
import CrearProyecto from "./CrearProyecto.jsx";

const Proyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos, eliminarProyecto } =
    proyectosContext;

  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
  }, [mensaje]);
  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const onClickEliminar = (id) => {
    eliminarProyecto(id);
  };

  if (proyectos.length === 0)
    return (
      <>
        <Titulo titulo="Lista de proyectos vacía" descripcion="" />
      </>
    );

  const { agregarProyectos } = useContext(proyectoContext);
  return (
    <div className="max-w-screen-xl mx-auto">
      {alerta ? <div>{alerta.msg}</div> : null}
      <Titulo titulo="Lista de proyectos" descripcion="" />
      <CrearProyecto agregarProyecto={agregarProyectos} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {proyecto.nombre}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">En desarrolllo!</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Completado
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Link
                      to={`/tarea/${proyecto._id}`}
                      className="font-medium text-blue-600 hover:underline mr-2"
                    >
                      Tarea
                    </Link>
                    <button
                      className="inline-flex items-center px-2 py-2 text-base font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800"
                      type="button"
                      onClick={() => onClickEliminar(proyecto._id)}
                    >
                      <MdFolderDelete />
                    </button>
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

export default Proyecto;
