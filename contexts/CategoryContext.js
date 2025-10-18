"use client";
import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [showCategory, setShowCategory] = useState("fuel");

  return (
    <CategoryContext.Provider value={{ showCategory, setShowCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
