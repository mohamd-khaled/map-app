"use client";
import { useContext, useEffect, useState, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { PositionContext } from "@/contexts/PositionContext";

const NearbyPlaces = ({ categoryValue }) => {
  const { position } = useContext(PositionContext);
  const [places, setPlaces] = useState([]);
  const hasFetched = useRef(false);

  const myIcon = new Icon({
    iconUrl: "/location-pin.png",
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (!position) return;
    const [lat, lng] = position;
    const fetchPlaces = async () => {
      try {
        const query = `
          [out:json];
          node["amenity"="${categoryValue}"](around:1000,${lat},${lng});
          out;
        `;
        const res = await fetch("https://overpass-api.de/api/interpreter", {
          method: "POST",
          body: query,
        });
        const data = await res.json();
        setPlaces(data.elements || []);
      } catch (err) {
        console.error("Error fetching nearby places:", err);
      }
    };

    fetchPlaces();
  }, [position, categoryValue]);

  if (!position || places.length === 0) return null;

  return (
    <>
      {places.map((place, i) => (
        <Marker key={i} position={[place.lat, place.lon]} icon={myIcon}>
          <Popup>
            <strong>{place.tags.name || "Unnamed place"}</strong>
            <br />
            {place.tags.amenity}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default NearbyPlaces;
