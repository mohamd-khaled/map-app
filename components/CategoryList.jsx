"use client";
import React, { useState, useEffect } from "react";
import categoryListData from "@/data/CategoryList";
import CategoryDetails from "@/components/CategoryDetails";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryListData);
  }, []);

  return (
    <div>
      <h1 className="text-blue-500 font-bold mt-4 text-[20px]  ">
        Select Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {category?.map((item) => (
          <CategoryDetails key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
