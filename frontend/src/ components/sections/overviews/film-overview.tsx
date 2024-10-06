import React, { useEffect } from "react";
import "./overview.css";

interface FilmOverviewProps {
  title: string;
  year: string;
  genre: string;
  locations: any[];
  setLocations: (locations: any[]) => void;
}

const FilmOverview: React.FC<FilmOverviewProps> = ({
  title,
  year,
  genre,
  locations,
  setLocations,
}) => {
  useEffect(() => {
    setLocations(locations);
  }, [locations]);

  return (
    <div className="overview">
      <button className="close" onClick={() => window.location.reload()}>
        Close
      </button>
      <h1>{title}</h1>
      <p>Release Date: {year}</p>
      <p>Genre: {genre}</p>
      <br></br>
      <h2>Locations: </h2>
      {locations.map((location, index) => (
        <p key={index}>{location.title}</p>
      ))}
    </div>
  );
};

export default FilmOverview;
