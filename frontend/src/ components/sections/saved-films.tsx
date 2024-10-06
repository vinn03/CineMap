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
  user,
  onOverviewShown,
  setLocations,
}) => {
  const savedFilms = films.filter((film) => user.films.includes(film.id));
  return (
    <div className="section">
      {savedFilms.map((film, index) => (
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
