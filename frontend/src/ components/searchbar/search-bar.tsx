import { useState } from "react";
import Films from "../../../models/films.json";
import Users from "../../../models/users.json";
import "../../index.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("films");

  const filteredFilms = Films.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  const filteredUsers = Users.filter((item) => {
    return item.display_name.toLowerCase().includes(query.toLowerCase());
  });

  const handleKeyPress = (e) => {
    const handleSearch = (query) => {
      if (!query) return;

      console.log("Searched for:", query);
    };

    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <span>
          {" "}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="films">Films</option>
            <option value="users">Users</option>
          </select>
        </span>
      </div>
      <div>
        {category === "films"
          ? filteredFilms.map((d) => (
              <button className="entry" key={d.id}>
                {d.title}
              </button>
            ))
          : filteredUsers.map((d) => (
              <button className="entry" key={d.email}>
                {d.display_name}
              </button>
            ))}
      </div>
    </div>
  );
}

export default SearchBar;
