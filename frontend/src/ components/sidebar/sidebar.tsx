import React, { useState } from "react";
import SavedFilms from "../sections/saved-films";
import SearchBar from "../searchbar/search-bar";
import NewFilm from "../sections/new-film";
import Films from "../../../models/films.json";
import "./sidebar.css";

// SidebarCollapsed component
const SidebarCollapsed = ({
  toggleSidebar,
  setActiveSection,
}: {
  toggleSidebar: () => void;
  setActiveSection: (sectionIndex: number) => void;
}) => {
  return (
    <div className="sidebar sidebar-collapsed">
      <div className="top-sections">
        {/* Icons for the collapsed view */}
        <div
          className="sidebar-btn collapsed-btn"
          onClick={() => {
            setActiveSection(1); // Set active section to 'Search'
            toggleSidebar(); // Expand the sidebar
          }}
        >
          <img
            src="/icons/search.png"
            alt="Search"
            className="collapsed-icon"
          />
        </div>
        <div
          className="sidebar-btn collapsed-btn"
          onClick={() => {
            setActiveSection(2); // Set active section to 'Saved Films'
            toggleSidebar(); // Expand the sidebar
          }}
        >
          <img
            src="/icons/saved.png"
            alt="Saved Films"
            className="collapsed-icon"
          />
        </div>
        <div
          className="sidebar-btn collapsed-btn"
          onClick={() => {
            setActiveSection(3); // Set active section to 'New Film'
            toggleSidebar(); // Expand the sidebar
          }}
        >
          <img src="/icons/add.png" alt="New Film" className="collapsed-icon" />
        </div>
      </div>
      <div className="profile-section">
        {/* Profile Icon */}
        <img
          src="/icons/profile.png"
          alt="Profile"
          className="profile-icon collapsed-icon"
        />
      </div>
    </div>
  );
};

// Sidebar Expanded
// SidebarExpanded component
const SidebarExpanded = ({
  toggleSidebar,
  activeSection,
  setActiveSection,
}: {
  toggleSidebar: () => void;
  activeSection: number | null;
  setActiveSection: (sectionIndex: number) => void;
}) => {
  const films = ["Film 1", "Film 2", "Film 3", "Film 4", "Film 5"]; // Dummy data for saved films

  const toggleSection = (sectionIndex: number) => {
    if (activeSection === sectionIndex) {
      setActiveSection(null); // Collapse if the same section is clicked
      toggleSidebar(); // Collapse the sidebar
    } else {
      setActiveSection(sectionIndex); // Switch to the new section
    }
  };

  return (
    <>
      {activeSection !== null && (
        <div className="backdrop" onClick={() => setActiveSection(null)} />
      )}{" "}
      {/* Backdrop for when a section is active */}
      <div className="sidebar sidebar-expanded">
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
        <div>
          <div className="content-section">
            {activeSection === 1 && <SearchBar />}
            {activeSection === 2 && <SavedFilms films={films} />}
            {activeSection === 3 && <NewFilm />}
          </div>
          <div className="profile-section">
            <img
              src="/icons/profile.png"
              alt="Profile"
              className="profile-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// expandable, click handling sidebar
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? (
        <SidebarExpanded
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ) : (
        <SidebarCollapsed
          toggleSidebar={toggleSidebar}
          setActiveSection={setActiveSection}
        />
      )}
    </div>
  );
};

export default Sidebar;
