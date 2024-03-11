// ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import Spinner from "../layout/Spinner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const authContext = React.useContext(AuthContext);
  const { autenticado } = authContext;

  // Estado para manejar la carga
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simulación de una verificación de autenticación asíncrona
    const verificarAutenticacion = async () => {
      // Aquí puedes realizar la verificación de autenticación
      // Por ejemplo, esperar a que el contexto de autenticación se actualice
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!autenticado) {
        // Si el usuario no está autenticado, redirige a la página de inicio
        navigate("/login", { replace: true, state: { from: location } });
      }

      // Una vez verificada la autenticación, se desactiva el estado de carga
      setCargando(false);
    };

    verificarAutenticacion();
  }, [autenticado, navigate, location]);

  // Mientras se verifica la autenticación, muestra "Cargando"
  if (cargando) {
    return <Spinner />;
  }

  // Si el usuario está autenticado, renderiza los componentes hijos
  return children;
};

export default ProtectedRoute;
