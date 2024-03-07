import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";
import AlertaContext from "../../../../context/alerts/alertaContext";
import AuthContext from "../../../../context/auth/authContext";

const LoginForm = () => {
  //Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son requeridos", "alerta-error");
      return; // Detiene la ejecución si hay campos vacíos
    }

    // Llama a iniciarSesion con los valores de email y password
    iniciarSesion({
      email,
      password,
    });
  };

  // Utiliza useNavigate para acceder a la función de navegación
  const navigate = useNavigate();

  useEffect(() => {
    if (autenticado) {
      navigate("/proyecto");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, navigate]); // Asegúrate de incluir navigate en la lista de dependencias

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <LoginInput
        type="email"
        name="email"
        placeholder="name@company.com"
        value={email}
        onChange={onChange}
        label="Your email"
      />
      <LoginInput
        type="password"
        name="password"
        placeholder="••••••••"
        value={password}
        onChange={onChange}
        label="Contraseña"
      />
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
