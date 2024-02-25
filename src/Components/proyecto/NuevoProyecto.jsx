import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

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

  return (
    <>
      <button type="button" onClick={() => mostrarFormulario()}>
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form onSubmit={onSubmitProyecto}>
          <input
            type="text"
            placeholder="nombre del proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          />
          <input type="submit" value="Agregar Proyecto" />
        </form>
      ) : null}
      {errorFormulario ? <p>el nombre del proyecto es obligatorio</p> : null}
    </>
  );
};

export default NuevoProyecto;
