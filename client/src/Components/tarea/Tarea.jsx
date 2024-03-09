import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareasContext;

  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }

    cambiarEstadoTarea(tarea);
  };

  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li  key={tarea._id}>
      <p>{tarea.nombre}</p>
      <div>
        {tarea.estado ? (
          <button type="button" onClick={() => cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" onClick={() => cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div>
        <button type="button" onClick={() => seleccionarTarea(tarea)}>
          editar
        </button>
      </div>
      
    </li>
  );
};

export default Tarea;
