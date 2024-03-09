import React from "react";

const Titulo = ({ titulo = "Titulo" }) => {
  return (
    <div className="text-center">
      <h1 className="my-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-600 from-primary-50">
          {titulo}
        </span>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        texto
      </p>
    </div>
  );
};

export default Titulo;
