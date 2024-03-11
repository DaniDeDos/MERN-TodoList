import React, { useContext, useEffect } from "react";

// Context
import { SidebarContext } from "../../../context/SidebarContext";
import AuthContext from "../../../context/auth/authContext";

// Iconos
import { TfiMenu } from "react-icons/tfi";

// Components
import NavbarUser from "./NavbarUser";
import TaskManagementLink from "./TaskManagementLink";

const Navbar = () => {
  // Utilizo el contexto de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  // Utilizo el contexto del menú lateral
  const { setIsDrawerOpen } = useContext(SidebarContext);

  // Función para abrir el menú de usuario
  const toggleUserMenu = () => {
    setIsDrawerOpen(true);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap items-center justify-between">
          <TaskManagementLink />
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            {/* Botón para abrir el menú de usuario */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 md:me-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={toggleUserMenu}
            >
              {/* Ícono del menú */}
              <TfiMenu className="text-[#fff]" />
            </button>
          </div>

          <NavbarUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
