import React from "react";
import NuevoProyecto from "../proyecto/NuevoProyecto.jsx";
import ListadoProyecto from "../proyecto/ListadoProyecto.jsx";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>TodoList</span>
      </h1>
      <NuevoProyecto />
      <div>
        <h2>Tus Proyectos</h2>
        <ListadoProyecto />
      </div>
    </aside>
  );
};

export default Sidebar;
