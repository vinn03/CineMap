import React from "react";

interface FilmOverviewProps {
  title: string;
  description: string;
  year: string;
  genre: string;
}

const FilmOverview: React.FC<FilmOverviewProps> = ({
  title,
  description,
  year,
  genre,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Release Date: {year}</p>
      <p>Genre: {genre}</p>
      <p>{description}</p>
    </div>
  );
};

export default FilmOverview;
