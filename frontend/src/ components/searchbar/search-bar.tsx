import { useState } from "react";
import Entry from "../sections/entry";
import "../../index.css";

function SearchBar({ onOverviewShown, setLocations, user, films }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("films");

  const filteredFilms = films.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  const handleKeyPress = (e) => {
    const handleSearch = (query) => {
      if (!query) return;
    };

    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <div>
      {/* <div> */}
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {/* <span>
          {" "}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="films">Films</option>
            <option value="users">Users</option>
          </select>
        </span>
      </div> */}
      <div>
        {filteredFilms.map((d) => (
          <Entry
            key={d.id}
            name={d.title}
            type="film"
            info={d}
            onOverviewShown={onOverviewShown}
            setLocations={setLocations}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
