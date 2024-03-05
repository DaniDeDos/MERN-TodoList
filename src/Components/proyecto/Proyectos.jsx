import React,{useContext} from "react";
import FormTarea from "../tarea/FormTarea";
import ListadoTarea from "../tarea/ListadoTarea";
import ListadoProyecto from "./ListadoProyecto";
import CrearProyecto from "./CrearProyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyectos = () => {
const { agregarProyectos } = useContext(proyectoContext);

  return (

      <div>
        <main>
        <CrearProyecto agregarProyecto={agregarProyectos} />

          <ListadoProyecto />
          <FormTarea />
          <div>
            <ListadoTarea />
          </div>
        </main>
      </div>
  );
};

export default Proyectos;
