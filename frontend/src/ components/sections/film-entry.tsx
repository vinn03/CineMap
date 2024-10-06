import React from "react";
import "./sections.css";

interface FilmEntryProps {
  filmName: string;
}

const FilmEntry: React.FC<FilmEntryProps> = ({ filmName }) => {
  return <button className="film-entry">{filmName}</button>;
};

export default FilmEntry;
