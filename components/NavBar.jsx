import React from "react";

// --------- FontAwesome Icons ------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const NavBar = () => {
  return (
    <div className="p-2 flex flex-col items-center w-[100px] space-y-4 h-screen sticky top-0 shadow-xl shadow-blue-300">
      <FontAwesomeIcon
        icon="fa-solid fa-map-location"
        className="h-[80px] w-[80px] cursor-pointer"
      />
      <FontAwesomeIcon
        icon="fa-solid fa-house "
        className="text-[#63E6BE] h-[40px] w-[40px] hover:text-[#2d5f85] cursor-pointer duration-300 p-2"
      />
      <FontAwesomeIcon
        icon="fa-solid fa-location-dot"
        className="text-[#63E6BE] h-[40px] w-[40px] hover:text-[#2d5f85] cursor-pointer duration-300 p-2"
      />
      <FontAwesomeIcon
        icon="fa-solid fa-heart"
        className="text-[#63E6BE] h-[40px] w-[40px] hover:text-[#2d5f85] cursor-pointer duration-300 p-2"
      />
    </div>
  );
};

export default NavBar;
