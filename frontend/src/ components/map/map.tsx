// npm install leaflet react-leaflet
import React, { useEffect, useState } from "react";
import * as leaf from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./map.css";
import films from "../../../models/films.json";

const position = [49.276, -122.918]; // SFU

const Map: React.FC = () => {
  // This function creates markers and popups

  const [map, setMap] = useState(null);
  const createMarkers = (map, filmList) => {
    filmList.forEach((film) => {
      film.locations.forEach((location) => {
        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lng);

        console.log({ lat }, { lng });

        // Create a marker
        const marker = L.marker([lat, lng]).addTo(map);

        // Create a popup with HTML content
        const popupContent = `
          <div>
            <h3>${location.title}</h3>
            <img src="${location.img}" alt="${location.title}" style="width: 100px;" />
          </div>
        `;

        // Bind the popup to the marker
        marker.bindPopup(popupContent);
      });
    });
  };

  // Location marker component
  const LocationMarker = () => {
    const [position, setPosition] = useState<L.LatLng | null>(null);
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

  // Custom zoom control component
  const CustomZoomControl: React.FC<{ position: string }> = ({ position }) => {
    const map = leaf.useMap();

    useEffect(() => {
      // Add the zoom control to the map with the specified position
      const zoomControl = L.control.zoom({
        position: position, // bottomright
      });

      zoomControl.addTo(map);

      // Clean up the zoom control when the component unmounts
      return () => {
        map.removeControl(zoomControl);
      };
    }, [map, position]); // Make sure to include dependencies

    return null; // This component doesn't render anything visible
  };

  useEffect(() => {
    if (map) createMarkers(map, films);
  }, [map]);

  return (
    <div className="map-container">
      <leaf.MapContainer
        center={position}
        zoom={2} // Initial zoom level
        style={{ height: "100vh", width: "100%" }}
        ref={setMap}
        // whenCreated={(mapInstance) => createMarkers(mapInstance, films)} // Create markers when map is created
      >
        <leaf.TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
        <CustomZoomControl position="bottomright" />
      </leaf.MapContainer>
    </div>
  );
};

export default Map;
