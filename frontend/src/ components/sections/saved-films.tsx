import React from "react";
import Entry from "./entry";
import "./sections.css";
import "../../index.css";

interface SavedFilmsProps {
  films: any[];
  onOverviewShown: (component: any) => void;
}

const SavedFilms: React.FC<SavedFilmsProps> = ({ films, onOverviewShown }) => {
  return (
    <div className="section">
      {films.map((film, index) => (
        <Entry
          key={index}
          name={film.title}
          type="film"
          info={film}
          onOverviewShown={onOverviewShown}
        />
      ))}
    </div>
  );
};

export default SavedFilms;
