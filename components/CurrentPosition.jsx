"use client";
import { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";

const CurrentPosition = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  const myIcon = new Icon({
    iconUrl: "/location-pin.png",
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        map.flyTo([latitude, longitude], 13);
      },
      (err) => {
        console.error("Error getting location:", err);
      }
    );
  }, [map]);

  if (!position) return null;

  return (
    <Marker position={position} icon={myIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default CurrentPosition;
