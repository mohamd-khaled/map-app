import { useState, useEffect, useContext } from "react";
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
        map.flyTo([latitude, longitude], map.getZoom());
      },
      (err) => {
        console.log(`Error geting location`);
      }
    );
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>You are Here</Popup>
    </Marker>
  );
};

export default CurrentPosition;
