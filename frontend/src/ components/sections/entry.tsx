import React, { useState, useEffect } from "react";
import FilmOverview from "./overviews/film-overview";
import UserOverview from "./overviews/user-overview";
import "../../index.css";

// type denotes film or user. info is the data for the entry
interface EntryProps {
  name: string;
  type: string;
  info: any;
  onOverviewShown: (component: any) => void;
}

const Entry: React.FC<EntryProps> = ({ name, type, info, onOverviewShown }) => {
  const [overviewShown, setOverviewShown] = useState(false);

  const toggleOverview = () => {
    console.log("toggling overview to: ", !overviewShown);
    setOverviewShown(!overviewShown);
  };

  useEffect(() => {
    console.log("useEffect triggered with overviewShown:", overviewShown);
    if (overviewShown) {
      const overviewComponent = renderOverview();
      onOverviewShown(overviewComponent);
    } else {
      console.log("Closing overview");
      onOverviewShown(null);
    }
  }, [overviewShown]);

  const renderOverview = () => {
    if (type === "film") {
      return (
        <FilmOverview
          title={name}
          year={info.year}
          genre={info.genre}
          locations={info.locations}
          toggleOverview={toggleOverview}
        />
      );
    } else if (type === "user") {
      return (
        <UserOverview
          display_name={info.display_name}
          user_films={info.films}
          onOverviewShown={onOverviewShown}
        />
      );
    }
    return null;
  };

  return (
    <div>
      {overviewShown ? (
        renderOverview()
      ) : (
        <button className="entry" onClick={toggleOverview}>
          {name}
        </button>
      )}
    </div>
  );
};

export default Entry;
