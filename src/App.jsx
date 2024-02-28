import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// imports components
import Login from "./Components/auth/Login.jsx";
import Register from "./Components/auth/Register.jsx";
import Proyectos from "./Components/proyecto/Proyectos.jsx";
import ProyectoState from "./context/proyectos/proyectoState.jsx";
import TareaState from "./context/tareas/tareaState.jsx";

const App = () => {
  return (
    <>
      <ProyectoState>
        <TareaState>
          <Router>
            <>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/proyecto" element={<Proyectos />} />
              </Routes>
            </>
          </Router>
        </TareaState>
      </ProyectoState>
    </>
  );
};

export default App;
