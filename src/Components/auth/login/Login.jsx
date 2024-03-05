import React from "react";
import { Link } from "react-router-dom";
import { GrTasks } from "react-icons/gr";
import LoginForm from "./LoginForm";

const Login = () => {
 return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <GrTasks className="text-[#1dcc00]" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#1dcc00]">
            MERN
          </span>
          <p className="self-center text-2xl font-semibold whitespace-nowrap text-dark">
            TodoList
          </p>
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Iniciar sesión en su cuenta
            </h1>
            <LoginForm />
            <p className="text-sm font-light text-gray-500">
              ¿Aún no tienes una cuenta?
              <Link
                to={"/register"}
                className="font-medium text-primary-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
 );
};

export default Login;
