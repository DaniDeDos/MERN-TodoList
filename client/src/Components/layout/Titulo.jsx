import React from "react";

const Titulo = ({
 titulo = "campo del Titulo",
 descripcion = "campo de la descripcion",
}) => {
 return (
    <div className="text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-600 from-primary-50">
          {titulo}
        </span>
      </h1>
      <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-500 dark:text-gray-400">
        {descripcion}
      </p>
    </div>
 );
};

export default Titulo;
