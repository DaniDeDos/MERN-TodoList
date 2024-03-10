import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";

import { MdOutlineAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const TareaNueva = ({ id }) => {
  const navigate = useNavigate();

  const tareasContext = useContext(tareaContext);
  const { limpiarTarea, tareaseleccionada } = tareasContext;

  const onclickNuevaTarea = () => {
    if (tareaseleccionada !== null) {
      limpiarTarea();
    }
    navigate(`/proyecto/tarea/form-tarea/${id}`);
  };

  return (
    <div className="block max-w-sm p-6 bg-primary-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div className="flex flex-col items-center text-center pb-10">
        <li className="list-none">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-50">
            Nueva Tarea
          </h5>
          <p className="font-normal text-primary-100 mb-2">
            Agrega una nueva tarea a tu proyecto.
          </p>
          <div className="">
            <button
              className="inline-flex items-center px-3 py-3 text-base font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-primary-600"
              type="button"
              onClick={onclickNuevaTarea}
              aria-label="Agregar nueva tarea"
            >
              <MdOutlineAdd />
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default TareaNueva;
/*
              <Link
                className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-[#fff] bg-primary-50 rounded-lg hover:bg-[#333]"
                to={`/proyecto/tarea/form-tarea/${id}`}
              >
                <MdOutlineAdd />
              </Link>
*/
