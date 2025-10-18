"use client";
import React, { useContext } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import CurrentPosition from "./CurrentPosition";
import NearbyPlaces from "./NearbyPlaces";
import { CategoryContext } from "@/contexts/CategoryContext";

const LeafletMap = ({ width, height }) => {
  const { showCategory } = useContext(CategoryContext);
  return (
    <MapContainer
      center={[30, 31]}
      zoom={13}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CurrentPosition />
      <NearbyPlaces categoryValue={showCategory} />
    </MapContainer>
  );
};

export default LeafletMap;
