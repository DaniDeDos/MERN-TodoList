import React from "react";
import CrearProyecto from "../proyecto/CrearProyecto";
import ListadoProyecto from "../proyecto/ListadoProyecto";
import FormTarea from "../tarea/FormTarea";
import ListadoTarea from "../tarea/ListadoTarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Home = () => {
  const { proyectoActual } = React.useContext(proyectoContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-16 text-center" >Gestión de Proyectos y Tareas</h1>
      <CrearProyecto />
      <ListadoProyecto />
      {proyectoActual && (
        <>
          <FormTarea />
          <ListadoTarea />
        </>
      )}
    </div>
  );
};

export default Home;
