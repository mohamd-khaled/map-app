import React, { useContext } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import CurrentPosition from "./CurrentPosition";
import { PositionContext } from "@/contexts/PositionContext";

const LeafletMap = ({ width, height }) => {
  const position = useContext(PositionContext);
  return (
    <MapContainer
      center={[30, 31]}
      zoom={13}
      className={`h-[${height}px] w-[${width}px]`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CurrentPosition />
    </MapContainer>
  );
};

export default LeafletMap;
