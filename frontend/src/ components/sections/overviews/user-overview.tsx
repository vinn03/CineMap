import React from "react";
import Entry from "../entry";

interface UserOverviewProps {
  display_name: string;
  films: string[];
}

const UserOverview: React.FC<UserOverviewProps> = ({ display_name, films }) => {
  return (
    <div>
      <h1>{display_name}</h1>
      {films.map((film, index) => (
        <Entry key={index} name={film} type="film" info={{}} />
      ))}
    </div>
  );
};

export default UserOverview;
