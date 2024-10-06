import React from "react";
import FilmEntry from "./film-entry";
import "./sections.css";

interface SavedFilmsProps {
  films: string[];
}

const SavedFilms: React.FC<SavedFilmsProps> = ({ films }) => {
  return (
    <div>
      <h2>Saved Films</h2>
      <ul className="film-list">
        {films.map((film) => (
          <FilmEntry filmName={film} />
        ))}
      </ul>
    </div>
  );
};

export default SavedFilms;
