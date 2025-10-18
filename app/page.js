"use client";
import { useState, useEffect } from "react";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import NearbyPlaces from "@/components/NearbyPlaces";
import LeafletMap from "@/components/LeafletMap";

export default function Home() {
  let width = 500;
  let height = 500;
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="flex flex-wrap gap-[100px] px-6 w-full mt-10">
        <div>
          <CategoryList />
        </div>
        <div className="place-items-center ">
          <h2 className="text-lg font-bold mb-2">Your Location</h2>
          <LeafletMap
            className={`sm:${(width = 100)} lg:${(width = 500)} `}
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
}
