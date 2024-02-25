import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/header/Header";
import FormTarea from "../tarea/FormTarea";
import ListadoTarea from "../tarea/ListadoTarea";
import Navbar from "../layout/navbar/Navbar";

const Proyectos = () => {
  return (
    <div>
      <Navbar />

      <Sidebar />
      <div>
        <Header />
        <main>
          <FormTarea />
          <div>
            <ListadoTarea />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
