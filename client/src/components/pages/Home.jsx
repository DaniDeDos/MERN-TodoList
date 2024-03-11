import React from "react";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

import Titulo from "../layout/Titulo";

const Home = () => {
  const parrafo = `"Aquí tienes una gran oportunidad para iniciar tu 
 propio viaje. En el mundo de la tecnología, la innovación y el capital, 
 cada proyecto es una oportunidad para desbloquear valor a largo plazo y 
 impulsar el crecimiento económico. ¡Empieza creando uno!"`;

  return (
    <div className="container mx-auto p-24 flex flex-col items-center justify-center">
      <Titulo titulo="Gestión de Proyectos y Tareas" descripcion={parrafo} />

      <Link
        className="inline-flex items-center px-3 py-3 text-base font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-primary-100 mt-8"
        type="button"
        to={"/proyecto/"}
      >
        Ir a Proyectos
        <MdArrowRightAlt />
      </Link>
    </div>
  );
};

export default Home;
