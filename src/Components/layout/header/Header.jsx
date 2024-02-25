import React from "react";
//import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-namepage-container">
          <div className="logo-container">
          </div>
          <p>
        <span>Mern </span>Todolist
        </p>
        </div>
        <p>
          Hola<span>total pro</span>
        </p>
        <nav href="#!">Cerrar Sesion</nav>
      </div>
    </header>
  );
};

export default Header;
