import React from "react";
import { useLocation } from "react-router-dom";
import { SidebarProvider } from "../../context/SidebarContext.jsx";
import Navbar from "./navbar/Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbarAndSidebar = !(
    location.pathname === "/login" || location.pathname === "/register"
  );

  return (
    <>
      {showNavbarAndSidebar && (
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <Footer />
        </SidebarProvider>
      )}
      {children}
    </>
  );
};

export default Layout;
