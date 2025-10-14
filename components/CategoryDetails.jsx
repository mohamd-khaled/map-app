import React from "react";
import Image from "next/image";
const CategoryDetails = ({ category }) => {
  return (
    <div className="mt-5 flex flex-col items-center bg-blue-100 rounded-2xl p-4 cursor-pointer hover:scale-105 transition-all">
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
