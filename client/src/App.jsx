import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imports components
import ProyectoState from "./context/proyectos/proyectoState.jsx";
import TareaState from "./context/tareas/tareaState.jsx";
import AlertaState from "./context/alerts/AlertaState.jsx";
import AuthState from "./context/auth/AuthState.jsx";
import tokenAuth from "./config/token.js";

import Login from "./components/pages/auth/login/Login.jsx";
import Register from "./components/pages/auth/register/Register.jsx";
import Home from "./components/pages/Home.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Proyecto from "./components/pages/proyecto/Proyecto.jsx";
import Tarea from "./components/pages/tarea/Tarea.jsx"
import FormTarea from "./components/pages/tarea/FormTarea.jsx";
import Layout from "./components/layout/Layout.jsx";

import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

const App = () => {
  return (
    <>
      <ProyectoState>
        <TareaState>
          <AlertaState>
            <AuthState>
              <Router>
                <Layout>
                  <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route
                      exact
                      path="/proyecto"
                      element={
                        <ProtectedRoute>
                          <Proyecto />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      exact
                      path="/tarea/:id"
                      element={
                        <ProtectedRoute>
                          <Tarea />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      exact
                      path="/proyecto/tarea/form-tarea/:id"
                      element={<FormTarea />}
                    />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </Router>
            </AuthState>
          </AlertaState>
        </TareaState>
      </ProyectoState>
    </>
  );
};

export default App;
