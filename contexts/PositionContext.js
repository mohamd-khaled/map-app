"use client";
import { createContext, useState } from "react";

export const PositionContext = createContext();

export const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState(null);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
};
