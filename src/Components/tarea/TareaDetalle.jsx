// DetalleTarea.jsx
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import tareaContext from "../../context/tareas/tareaContext";

const DetalleTarea = () => {
  const { id } = useParams(); // Obtiene el ID de la tarea de la URL
  const tareasContext = useContext(tareaContext);
  const { tareas, obtenerTareaPorId } = tareasContext;

  useEffect(() => {
    obtenerTareaPorId(id); // Aquí debes implementar la lógica para obtener la tarea por ID
  }, [id]);

  // Implementa la lógica para mostrar los detalles de la tarea
  return (
    <div>
      <h2>Detalles de la Tarea</h2>
      {/* Muestra los detalles de la tarea aquí */}
    </div>
  );
};

export default DetalleTarea;
