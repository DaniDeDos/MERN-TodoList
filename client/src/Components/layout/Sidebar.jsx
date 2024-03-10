import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../../context/SidebarContext.jsx";
import { PiSignInBold } from "react-icons/pi";
import { MdCreateNewFolder } from "react-icons/md";
import AuthContext from "../../context/auth/authContext.js";
import { MdHome, MdOutlineClose } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import proyectoContext from "../../context/proyectos/proyectoContext.js";
import AlertaContext from "../../context/alerts/alertaContext.js";
import { Link } from "react-router-dom";

const Sidebar = () => {




  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion, autenticado } =
    authContext;

  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { mostrarAlerta } = alertaContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
  }, [mensaje]);

  const { isDrawerOpen, setIsDrawerOpen } = useContext(SidebarContext);

  return (
    <aside>
      <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "" : "translate-x-full"
        } bg-white`}
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
        >
          <MdOutlineClose />
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {usuario ? (
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg group"
                >
                  <FaUserAlt className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {usuario.nombre}
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                    Pro
                  </span>
                </a>
              </li>
            ) : null}
            <hr className="my-2" />
            <li>
              <Link
                to={"/home"}
                className="flex items-center p-2 text-gray-900 rounded-lg group"
              >
                <MdHome className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">Home</span>
              </Link>
            </li>

            <li>
              <Link
                to={"proyecto/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
              >
                <MdCreateNewFolder className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  {proyectos ? proyectos.length : 0}
                </span>
              </Link>
            </li>
            <hr className="my-2" />
            {autenticado ? (
              <li>
                <button
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                  onClick={() => cerrarSesion()}
                >
                  <PiSignInBold className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Cerrar sesión
                  </span>
                </button>
              </li>
            ) : (
              <li>
                <Link
                  className="flex items-center p-2 text-primary-50 rounded-lg hover:bg-gray-100"
                  to={"/login"}
                >
                  <PiSignInBold className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-primary-100" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Iniciar sesión
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
