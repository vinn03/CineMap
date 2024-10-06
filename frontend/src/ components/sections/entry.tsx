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
  setLocations: (locations: any[]) => void;
}

const Entry: React.FC<EntryProps> = ({
  name,
  type,
  info,
  onOverviewShown,
  setLocations,
}) => {
  const [overviewShown, setOverviewShown] = useState(false);

  const toggleOverview = () => {
    setOverviewShown(!overviewShown);
  };

  useEffect(() => {
    if (overviewShown) {
      const overviewComponent = renderOverview();
      onOverviewShown(overviewComponent);
    } else {
      onOverviewShown(null);
    }
  }, [overviewShown]);

  const renderOverview = () => {
    return (
      <FilmOverview
        title={name}
        year={info.year}
        genre={info.genre}
        locations={info.locations}
        toggleOverview={toggleOverview}
        setLocations={setLocations}
      />
    );
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
