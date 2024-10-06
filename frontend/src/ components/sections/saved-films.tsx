import React from "react";
import "./sections.css";

interface SavedFilmsProps {
  films: string[];
}

const SavedFilms: React.FC<SavedFilmsProps> = ({ films }) => {
  return (
    <div className="section">
      {films.map((film, index) => (
        <button key={index} className="film-entry">
          {film}
        </button>
      ))}
    </div>
  );
};

export default SavedFilms;
