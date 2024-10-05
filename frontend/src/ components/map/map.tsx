// npm install leaflet react-leaflet
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"; // optional, for custom styles

const Map: React.FC = () => {
	return (
		<div className="map-container">
			<MapContainer
				center={[51.505, -0.09]} // Initial coordinates (London)
				zoom={13} // Initial zoom level
				style={{ height: "100vh", width: "100%" }} // Full page map
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Using OpenStreetMap tiles
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
			</MapContainer>
		</div>
	);
};

export default Map;
