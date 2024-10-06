import { useState } from "react";
import Entry from "../sections/entry";
import Films from "../../../models/films.json";
import Users from "../../../models/users.json";
import "../../index.css";

function SearchBar({ onOverviewShown }) {
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
        {category === "films"
          ? filteredFilms.map((d) => (
              <Entry
                key={d.id}
                name={d.title}
                type="film"
                info={d}
                onOverviewShown={onOverviewShown}
              />
            ))
          : filteredUsers.map((d) => (
              <Entry
                key={d.email}
                name={d.display_name}
                type="user"
                info={d}
                onOverviewShown={onOverviewShown}
              />
            ))}
      </div>
    </div>
  );
}

export default SearchBar;
