import React, { useState } from "react";
import "./sections.css";

const NewFilm: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  const [genre, setGenre] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "year":
        setYear(value);
        break;
      case "genre":
        setGenre(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFilm = {
      title,
      year,
      genre,
    };

    fetch("http://127.0.0.1:5000/film-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFilm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="new-form">
      <h3>Add New Movie</h3>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Title:</td>
            <td>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Year:</td>
            <td>
              <input
                type="text"
                name="year"
                value={year}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Genre:</td>
            <td>
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewFilm;
