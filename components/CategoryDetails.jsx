"use client";
import React, { useContext } from "react";
import { CategoryContext } from "@/contexts/CategoryContext";

const CategoryDetails = ({ category }) => {
  const { showCategory, setShowCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => {
        setShowCategory(category.value);
      }}
      className="mt-5 flex flex-col items-center bg-blue-100 rounded-2xl p-4 cursor-pointer hover:scale-105 transition-all"
    >
      <img
        src={category.icon}
        alt={category.name}
        className="w-[50px] h-[50px]"
      />
      <h1 key={category.id} className="text-blue-500 text-[15px] mt-3">
        {category.name}
      </h1>
    </div>
  );
};

export default CategoryDetails;
