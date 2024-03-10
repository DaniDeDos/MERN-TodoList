// CrearProyecto.jsx
import React, { useState } from "react";

const CrearProyecto = ({ agregarProyecto }) => {
  const [nombreProyecto, setNombreProyecto] = useState("");

  const manejarCambio = (e) => {
    setNombreProyecto(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevoProyecto = { nombre: nombreProyecto };
    agregarProyecto(nuevoProyecto);
    setNombreProyecto("");
  };

  return (
    <form onSubmit={manejarEnvio} className="max-w-md mx-auto my-8">
      <div className="relative">
        <input
          type="text"
          value={nombreProyecto}
          onChange={manejarCambio}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Nombre del Proyecto..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-4 py-2"
        >
          Crear Proyecto
        </button>
      </div>
    </form>
  );
};

export default CrearProyecto;
