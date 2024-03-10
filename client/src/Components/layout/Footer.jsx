import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
    <footer className="bg-primary-50 fixed bottom-0 w-full">
      <div className="mx-auto w-full max-w-screen-xl lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-primary-100 text-center">
            © 2024{" "}
            <Link to={"/"} className="hover:underline">
              MERN-TodoList
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
