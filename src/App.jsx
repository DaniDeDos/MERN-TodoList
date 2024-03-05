import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// imports components
import Login from "./Components/auth/login/Login.jsx";
import Register from "./Components/auth/register/Register.jsx";
import Proyectos from "./Components/proyecto/Proyectos.jsx";
import ProyectoState from "./context/proyectos/proyectoState.jsx";
import TareaState from "./context/tareas/tareaState.jsx";
import NotFound from "./Components/pages/NotFound.jsx";
import Home from "./Components/pages/Home.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import Navbar from "./Components/layout/navbar/Navbar.jsx";
import Sidebar from "./Components/layout/Sidebar.jsx";
import TareaDetalle from "./Components/tarea/TareaDetalle.jsx";

const App = () => {
  return (
    <>
      <ProyectoState>
        <TareaState>
          <SidebarProvider>
            <Navbar />
            <Sidebar />
          </SidebarProvider>
          <Router>
            <>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/proyecto" element={<Proyectos />} />

                <Route exact path="/" element={<Home />} />
                <Route exact path="*" element={<NotFound />} />
              </Routes>
            </>
          </Router>
        </TareaState>
      </ProyectoState>
    </>
  );
};

export default App;
