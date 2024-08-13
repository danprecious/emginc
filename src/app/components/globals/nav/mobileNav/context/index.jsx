"use client";
import React, { useState } from "react";

export const MobileNavContext = React.createContext();

const MobileNavContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MobileNavContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavContextProvider;
