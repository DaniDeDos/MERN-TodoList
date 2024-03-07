import React from "react";

const Headings = () => {
  const tittle = `Lista de proyectos vacia`;

  const parrafo = `"No hay proyectos registrados, pero aquí tienes una gran oportunidad
    para iniciar tu propio viaje. En el mundo de la tecnología, la
    innovación y el capital, cada proyecto es una oportunidad para
    desbloquear valor a largo plazo y impulsar el crecimiento económico.
    ¡Empieza creando uno!"`;

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          {tittle}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          {parrafo}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
      </div>
    </section>
  );
};

export default Headings;
