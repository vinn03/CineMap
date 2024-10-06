import React from "react";
import Entry from "./entry";
import "./sections.css";
import "../../index.css";

interface SavedFilmsProps {
  films: any[];
  user: any;
  onOverviewShown: (component: any) => void;
  setLocations: (locations: any[]) => void;
}

const SavedFilms: React.FC<SavedFilmsProps> = ({
  films,
  onOverviewShown,
  setLocations,
}) => {
  return (
    <div className="section">
      {films.map((film, index) => (
        <Entry
          key={index}
          name={film.title}
          type="film"
          info={film}
          onOverviewShown={onOverviewShown}
          setLocations={setLocations}
        />
      ))}
    </div>
  );
};

export default SavedFilms;
