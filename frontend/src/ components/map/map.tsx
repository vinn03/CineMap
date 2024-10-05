// npm install leaflet react-leaflet
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

const Map: React.FC = () => {
	return (
		<div className="map-container">
			<MapContainer center={[51.505, -0.09]} zoom={13}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Using OpenStreetMap tiles
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
			</MapContainer>
		</div>
	);
};

export default Map;
