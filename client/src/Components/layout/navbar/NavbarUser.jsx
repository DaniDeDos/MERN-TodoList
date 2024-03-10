import React from "react";

const NavbarUser = () => {
  // Array de objetos que representa los elementos del menú.
  const menuItems = [
    {
      name: "Home",
      href: "/",
      className: "md:bg-transparent md:text-[#1dcc00] md:p-0",
    },
    {
      name: "Proyectos",
      href: "/proyecto",
      className: "md:hover:bg-transparent md:hover:text-[#1dcc00] md:p-0",
    },
  ];

  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`block py-2 px-3 text-white rounded ${item.className}`}
              aria-current={index === 0 ? "page" : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarUser;
