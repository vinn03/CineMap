import { useState } from "react";
import Map from "./ components/map/map";
import Sidebar from "./ components/sidebar/sidebar";

function App() {
	return (
		<div className="App">
			{/* <Sidebar /> Sidebar will overlay the map */}
			<div className="map-container">
				<Map />
			</div>
		</div>
	);
}

export default App;
