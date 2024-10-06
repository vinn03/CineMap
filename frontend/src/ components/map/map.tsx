// npm install leaflet react-leaflet
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./map.css";

const Map: React.FC = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[51.505, -0.09]} // Initial coordinates (London)
        zoom={13} // Initial zoom level
        style={{ height: "100vh", width: "100%" }} // Full page map
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Using OpenStreetMap tiles
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CustomZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

const CustomZoomControl: React.FC<{ position: string }> = ({ position }) => {
  const map = useMap(); // Get access to the map instance

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

export default Map;
