import React from "react";
import Entry from "../entry";
import Films from "../../../../models/films.json";
import "./overview.css";

interface UserOverviewProps {
  display_name: string;
  user_films: number[];
  onOverviewShown: (component: any) => void;
}

const UserOverview: React.FC<UserOverviewProps> = ({
  display_name,
  user_films,
  onOverviewShown,
}) => {
  const filteredFilms = Films.filter((film) => user_films.includes(film.id));

  return (
    <div className="overview">
      <h1>{display_name}</h1>
      <h2>Saved Films: </h2>
      {filteredFilms.map((film, index) => (
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

export default UserOverview;
