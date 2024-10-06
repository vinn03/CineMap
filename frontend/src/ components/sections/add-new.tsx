import React, { useState } from "react";
import NewFilm from "./new-film";
import NewPost from "./new-post";
import "./sections.css";

interface AddNewProps {
  user: any;
  films: any[];
}

// handle dropdown that switches between newfilm and newpost
const AddNew: React.FC<AddNewProps> = ({ user, films }) => {
  const [selectedType, setSelectedType] = useState<string>("Post");

  // Function to handle the change in dropdown selection
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="Post">Post</option>
          <option value="Film">Film</option>
        </select>
      </div>

      <div>
        {selectedType === "Post" ? (
          <NewPost user={user} films={films} />
        ) : (
          <NewFilm />
        )}
      </div>
    </div>
  );
};
export default AddNew;
