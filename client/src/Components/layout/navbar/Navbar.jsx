// Navbar.js
import React, { useContext, useEffect } from "react";
import NavbarUser from "./NavbarUser";
import TaskManagementLink from "./TaskManagementLink";
import { TfiMenu } from "react-icons/tfi";
import { SidebarContext } from "../../../context/SidebarContext";
import AuthContext from "../../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const { setIsDrawerOpen } = useContext(SidebarContext); // Accede a setIsDrawerOpen

  const toggleUserMenu = () => {
    setIsDrawerOpen(true); // Abre el sidebar al hacer clic
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <TaskManagementLink />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button
            type="button"
            className="flex text-sm bg-gray-800 md:me-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={toggleUserMenu}
          >
            <TfiMenu className="text-[#fff]" />
          </button>
        </div>

        <NavbarUser />
      </div>
      {usuario ? (
        <p>
          Hola <span>{usuario.nombre}</span>
        </p>
      ) : null}
    </nav>
  );
};

export default Navbar;
