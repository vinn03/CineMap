import React, { useState } from "react";
import SavedFilms from "../sections/saved-films";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null); // Track the active section (null means sidebar is collapsed)

  const films = ["Film 1", "Film 2", "Film 3", "Film 4", "Film 5"];

  const toggleSection = (sectionIndex: number) => {
    if (activeSection === sectionIndex) {
      setActiveSection(null); // Collapse if the same section is clicked
    } else {
      setActiveSection(sectionIndex); // Switch to the new section
    }
  };
  return (
    <>
      {activeSection !== null && (
        <div className="backdrop" onClick={() => setActiveSection(null)} />
      )}{" "}
      {/* Backdrop for when sidebar is open */}
      <div className={`sidebar ${activeSection !== null ? "open" : ""}`}>
        {/* Conditional class for open state */}
        <div className="top-sections">
          <button
            className={`sidebar-btn ${activeSection === 1 ? "active" : ""}`}
            onClick={() => toggleSection(1)}
          >
            Search
          </button>
          <button
            className={`sidebar-btn ${activeSection === 2 ? "active" : ""}`}
            onClick={() => toggleSection(2)}
          >
            Saved Films
          </button>
          <button
            className={`sidebar-btn ${activeSection === 3 ? "active" : ""}`}
            onClick={() => toggleSection(3)}
          >
            New Film
          </button>
        </div>
        <div className="content-section">
          {activeSection === 1 && null}
          {activeSection === 2 && <SavedFilms films={films} />}
          {activeSection === 3 && null}
        </div>
        <div className="profile-section">
          <img src="profile.png" alt="Profile" className="profile-icon" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
