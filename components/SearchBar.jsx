import React from "react";
// --------- FontAwesome Icons ------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const SearchBar = () => {
  return (
    <div className="flex p-3 rounded-2xl gap-3 bg-blue-300">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass-location"
        className="h-[25px] w-[25px] text-[#2d5f85]"
      />
      <input
        type="text"
        placeholder="Search Here"
        className="outline-none w-full text-black"
      />
    </div>
  );
};

export default SearchBar;
