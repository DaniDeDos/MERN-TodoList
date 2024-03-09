import React from "react";

import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const TareaNueva = ({ id }) => {
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
            <Link
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-primary-50 rounded-lg hover:bg-[#333]"
              to={`/proyecto/tarea/form-tarea/${id}`}
            >
              <MdOutlineAdd />
            </Link>
          </div>
        </li>
      </div>
    </div>
  );
};

export default TareaNueva;
