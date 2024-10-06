import React, { useState } from "react";
import NewFilm from "./new-film";
import NewPost from "./new-post";
import "./sections.css";

// handle dropdown that switches between newfilm and newpost
const AddNew: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("Post");

  // Function to handle the change in dropdown selection
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Button that changes based on selected dropdown */}
      <button style={{ marginRight: "10px" }}>New {selectedType}</button>

      {/* Dropdown for selecting Post or Film */}
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="Post">Post</option>
        <option value="Film">Film</option>
      </select>
    </div>
  );
};
export default AddNew;
