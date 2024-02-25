// UserDropdownMenu.js
import React from "react";

const UserDropdownMenu = ({ isOpen, toggleMenu }) => {
  // Añade una clase condicional para ajustar la posición del menú
  const dropdownClass = `z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-full ${
    isOpen ? "left-1/2 transform -translate-x-1/2" : "hidden"
  }`;

  return (
    <div className={dropdownClass} id="user-dropdown">
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900">Bonnie Green</span>
        <span className="block text-sm text-gray-500 truncate">
          name@flowbite.com
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Earnings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Cerrar sesión
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdownMenu;
