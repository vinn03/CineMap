import React, { useState } from "react";
import FilmOverview from "./overviews/film-overview";
import UserOverview from "./overviews/user-overview";
import "../../index.css";

// type denotes film or user. info is the data for the entry
interface EntryProps {
  name: string;
  type: string;
  info: any;
}

const Entry: React.FC<EntryProps> = ({ name, type, info }) => {
  const [showOverview, setShowOverview] = useState(false);

  const handleClick = () => {
    setShowOverview(true);
  };

  const renderOverview = () => {
    if (type === "film") {
      return <FilmOverview {...info} />;
    } else if (type === "user") {
      return <UserOverview {...info} />;
    }
    return null;
  };

  return (
    <div>
      {showOverview ? (
        renderOverview()
      ) : (
        <button className="entry" onClick={handleClick}>
          {name}
        </button>
      )}
    </div>
  );
};

export default Entry;
