import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto.jsx";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0)
    return <p>No hay proyectos, empieza creando uno</p>;

  return (
    <div>
      <ul>
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyecto;
