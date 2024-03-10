import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  OBTENER_USUARIO,
  CERRAR_SESION,
} from "../types";

const AuthState = ({ children }) => {

  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Asegúrate de definir la función registrarUsuario correctamente
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta.data);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });

      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  //Retornar usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // Inicio de sesion
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos); // Asegúrate de pasar 'datos' como segundo argumento
      console.log(respuesta.data);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      // Guardar el token en el localStorage
      localStorage.setItem("token", respuesta.data.token);
      // Actualizar el estado de autenticación
      usuarioAutenticado();
    } catch (error) {
      console.log(error.response);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  // Cerrar sesion
  const cerrarSesion = async () => {
    try {
      // Eliminar el token del localStorage
      localStorage.removeItem("token");
      // Actualizar el estado de autenticación a false
      dispatch({
        type: CERRAR_SESION,
        payload: {
          autenticado: false,
          usuario: null,
          token: null,
        },
      });
      
    } catch (error) {
      console.log(error.response);
      const alerta = {
        msg: "Hubo un error al cerrar sesión",
        categoria: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
