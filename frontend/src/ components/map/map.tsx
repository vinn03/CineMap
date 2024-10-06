// npm install leaflet react-leaflet
import React, { useEffect, useState } from "react";
import * as leaf from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position = [49.276, -122.918]; // SFU

interface MapProps {
  locations: any[];
  user: any;
}

const Map: React.FC<MapProps> = ({ locations, user }) => {
  // This function creates markers and popups

	const [map, setMap] = useState(null);
	const [markers, setMarkers] = useState([]);

	const createMarkers = (map, locations) => {
		markers.forEach((marker) => {
			marker.remove();
		});

		const newMarkers = locations.map((location) => {
			const lat = parseFloat(location.lat);
			const lng = parseFloat(location.lng);

			// Create a marker
			const marker = L.marker([lat, lng]).addTo(map);

			// Create a popup with HTML content
			const popupContent = `
          <div>
            <h3>${location.title}</h3>
            <img src="${location.img}" alt="${location.title}" style="width: 100px;" />
            <h4>
          </div>
        `;

			// Bind the popup to the marker
			marker.bindPopup(popupContent);

			return marker;
		});

		setMarkers(newMarkers);
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
		if (map) {
			createMarkers(map, locations);
		}
	}, [map, locations]);

	return (
		<div>
			<leaf.MapContainer
				center={position}
				zoom={5} // Initial zoom level
				zoomControl={false}
				style={{ height: "100vh", width: "100vw" }}
				ref={setMap}
			>
				<leaf.TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<CustomZoomControl position="bottomright" />
			</leaf.MapContainer>
		</div>
	);
};

export default Map;
