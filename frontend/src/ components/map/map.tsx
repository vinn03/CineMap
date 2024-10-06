// npm install leaflet react-leaflet
import React, { useState } from "react";
import * as leaf from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";
import "./map.css";
import films from "./models/films.json";

const position = [51.505, -0.0]; // TODO: change this to get location from JSON

const Map: React.FC = () => {
  //   const getLocation = () => {
  //     fetch("films.json");
  //   };

  // This function should only be active when adding new POIs
  const LocationMarker = () => {
    const [position, setPosition] = useState<LatLng | null>(null);
    const map = leaf.useMapEvents({
      click(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <leaf.Marker position={position}>
        <leaf.Popup>You are here</leaf.Popup>
      </leaf.Marker>
    );
  };

  const CustomZoomControl: React.FC<{ position: string }> = ({ position }) => {
    const map = leaf.useMap(); // Get access to the map instance

    React.useEffect(() => {
      // Add the zoom control to the map with the specified position
      const zoomControl = L.control.zoom({
        position: position, // bottomright
      });

      zoomControl.addTo(map); // Add the control to the map

      // Clean up the zoom control when the component unmounts
      return () => {
        map.removeControl(zoomControl); // Remove the control from the map
      };
    }, []);

    return null; // This component doesn't render anything visible
  };

  return (
    <div className="map-container">
      <leaf.MapContainer
        center={position} // TODO: center on map marker? does not account for sidebar displacement
        zoom={13} // Initial zoom level
        style={{ height: "100vh", width: "100%" }} // Full page map
        zoomControl={false}
      >
        <leaf.TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Using OpenStreetMap tiles
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CustomZoomControl position="bottomright" />
        <LocationMarker />
        {/* <leaf.Marker position={position}>
          <leaf.Popup>Location title from JSON</leaf.Popup>
        </leaf.Marker> */}
      </leaf.MapContainer>
    </div>
  );
};

export default Map;
