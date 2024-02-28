import React from "react";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tarea/FormTarea";
import ListadoTarea from "../tarea/ListadoTarea";
import Navbar from "../layout/navbar/Navbar";
import { SidebarProvider } from "../../context/SidebarContext";

const Proyectos = () => {
  return (
    <div>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      <div>
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
