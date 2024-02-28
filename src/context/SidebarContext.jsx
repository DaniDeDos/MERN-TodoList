import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
