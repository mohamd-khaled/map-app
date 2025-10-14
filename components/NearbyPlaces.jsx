import React from "react";
import NearbyPlacesDetails from "./NearbyPlacesDetails";

const NearbyPlaces = () => {
  return (
    <div>
      <h1 className="text-blue-500 font-bold mt-4 text-[20px] flex flex-row justify-between ">
        Nearby Places
        <span className="flex flex-row justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300 hover:text-blue-950"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300 hover:text-blue-950"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </h1>

      <div>
        <NearbyPlacesDetails />
      </div>
    </div>
  );
};

export default NearbyPlaces;
