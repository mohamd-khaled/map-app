import Image from "next/image";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import NearbyPlaces from "@/components/NearbyPlaces";

export default function Home() {
  return (
    <div className="flex">
      <NavBar />

      <div className="grid grid-cols-1 md:grid-cols-2 px-6 w-full mt-10">
        <div>
          <SearchBar />
          <CategoryList />
          <NearbyPlaces />
        </div>
        <div>Map</div>
      </div>
    </div>
  );
}
