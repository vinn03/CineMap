// npm install leaflet react-leaflet
import React, { useEffect, useState, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

interface MapProps {
  locations: any[];
  user: any;
}

const Map: React.FC<MapProps> = ({ locations, user }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  const position: [number, number] = [-122.918, 49.276]; // SFU
  const zoom: number = 2;

  // map initialization
  useEffect(() => {
    if (mapRef.current) return;
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY}`,
      center: position,
      zoom: zoom,
    });
  }, [API_KEY, position, zoom]);

  // add markers to the map
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // remove existing markers
    markers.forEach((marker) => marker.remove());

    // add new markers
    const newMarkers = locations.map((location) => {
      const lat = parseFloat(location.lat);
      const lng = parseFloat(location.lng);

      const marker = new maplibregl.Marker().setLngLat([lng, lat]).addTo(map);

      // Create popup content
      const userPosts = user?.posts?.filter(
        (post) =>
          post.location_id === location.id &&
          post.movie_id === location.movie_id
      );

      let popupContent = `<h3>${location.title}</h3>`;

      if (userPosts?.length > 0) {
        popupContent += '<div class="reviews">';
        userPosts.forEach((post) => {
          popupContent += `<p>${post.review}</p>`;
        });
        popupContent += "</div>";
      }

      const popup = new maplibregl.Popup({ offset: 25 }).setHTML(popupContent);

      marker.setPopup(popup);

      return marker;
    });

    setMarkers(newMarkers);
  }, [locations]);

  return (
    <div>
      <div
        ref={mapContainerRef}
        className="map"
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
};

export default Map;
