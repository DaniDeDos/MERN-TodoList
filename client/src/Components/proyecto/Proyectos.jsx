import React, { useContext, useEffect } from "react";
import FormTarea from "../tarea/FormTarea";
import ListadoTarea from "../tarea/ListadoTarea";
import ListadoProyecto from "./ListadoProyecto.jsx";
import CrearProyecto from "./CrearProyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import AuthContext from "../../context/auth/authContext";

const Proyectos = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

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
