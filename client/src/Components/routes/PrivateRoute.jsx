import React, { useEffect, useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { autenticado, cargando } = authContext;

  const navigate = useNavigate();

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <Route
      {...props}
      render={(routeProps) =>
        !autenticado && !cargando ? (
          navigate("/proyecto")
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
};

export default PrivateRoute;
