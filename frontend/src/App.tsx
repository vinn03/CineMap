import { useEffect, useState } from "react";
import Map from "./ components/map/map";
import Sidebar from "./ components/sidebar/sidebar";

function App() {
  const [locationsToRender, setLocationsToRender] = useState([]);
  const [user, setUser] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetch("http://127.0.0.1:5000/films");
      const data = await response.json();
      setFilms(data);
    };

    const fetchUser = async () => {
      const response = await fetch(
        "http://127.0.0.1:5000/user?email=test@gmail.com",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setUser(data);
    };

    fetchFilms();
    fetchUser();
  }, []);

  return (
    <div className="App">
      {/* <Sidebar /> Sidebar will overlay the map */}
      <div className="sidebar-container">
        <Sidebar
          setLocations={setLocationsToRender}
          user={user}
          films={films}
        />
      </div>
      <div className="map-container">
        <Map locations={locationsToRender} user={user} />
      </div>
    </div>
  );
}

export default App;
