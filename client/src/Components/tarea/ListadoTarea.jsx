import React, { useContext } from "react";
import Tarea from "./Tarea.jsx";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  const [proyectoActual] = proyecto;

  // Asegurarse de que tareasproyecto está definido antes de usarlo
  if (!tareasproyecto) return <h2>Cargando tareas...</h2>;

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul>
        {tareasproyecto.length === 0 ? (
          <li>
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>
    </>
  );
};

export default ListadoTarea;
