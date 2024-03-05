import React, { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginForm = () => {
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
    // Aquí iría la lógica de inicio de sesión
 };

 return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
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
      <LoginButton />
    </form>
 );
};

export default LoginForm;
