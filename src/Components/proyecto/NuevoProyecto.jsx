import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import FormNuevoProyecto from "./FormNuevoProyecto";

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorFormulario,
    mostrarFormulario,
    agregarProyectos,
    mostrarError,
  } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    if (nombre === "") {
      mostrarError();
      return;
    }

    agregarProyectos(proyecto);

    guardarProyecto({
      nombre: "",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        Nuevo Proyecto
      </button>
      {isModalOpen && <FormNuevoProyecto onOpenModal={openModal} />}
      {errorFormulario ? (
        <p className="text-red-500 text-xs italic">
          El nombre del proyecto es obligatorio
        </p>
      ) : null}
    </>
  );
};

export default NuevoProyecto;

{
  /*        <form onSubmit={onSubmitProyecto} className="space-y-4">
          <input
            type="text"
            placeholder="nombre del proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          />
        </form> */
}
