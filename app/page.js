"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import NearbyPlaces from "@/components/NearbyPlaces";
import LeafletMap from "@/components/LeafletMap";

export default function Home() {
  return (
    <div className="flex">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 w-full mt-10">
        <div>
          <SearchBar />
          <CategoryList />
        </div>
        <div className="place-items-center">
          <h2 className="text-lg font-bold mb-2">Your Location</h2>
          <LeafletMap width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
