import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto.jsx";
import proyectoContext from "../../context/proyectos/proyectoContext";
import NuevoProyecto from "../proyecto/NuevoProyecto.jsx";

const ListadoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0)
    return (
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            No hay proyectos registrados
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
            "empieza creando uno!"
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
          <NuevoProyecto />
        </div>
      </section>
    );

  return (
    <div>
      <h2>Tus Proyectos</h2>
      <NuevoProyecto />

      <ul>
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyecto;
