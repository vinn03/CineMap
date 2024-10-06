import React from "react";
import Entry from "./entry";
import "./sections.css";
import "../../index.css";

interface SavedFilmsProps {
  films: any[];
}

const SavedFilms: React.FC<SavedFilmsProps> = ({ films }) => {
  return (
    <div className="section">
      {films.map((film, index) => (
        <Entry key={index} name={film.title} type="film" info={film} />
      ))}
    </div>
  );
};

export default SavedFilms;
