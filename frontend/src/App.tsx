import { useEffect, useState } from "react";
import Map from "./ components/map/map";
import Sidebar from "./ components/sidebar/sidebar";

function App() {
  const [locationsToRender, setLocationsToRender] = useState([]);

  useEffect(() => {
    console.log("Locations to render:", locationsToRender);
  }, [locationsToRender]);

  return (
    <div className="App">
      {/* <Sidebar /> Sidebar will overlay the map */}
      <div className="sidebar-container">
        <Sidebar setLocations={setLocationsToRender} />
      </div>
      <div className="map-container">
        <Map locations={locationsToRender} />
      </div>
    </div>
  );
}

export default App;
