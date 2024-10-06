import React, { useState } from "react";
import "./sections.css";

interface NewPostProps {
  user: any;
  films: any[];
}

const NewPost: React.FC<NewPostProps> = ({ user, films }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [film, setFilm] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [comment, setComment] = useState("");

  // Handle film selection
  const handleFilmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMovieTitle = event.target.value;

    // Find the selected movie and update the location dropdown
    const selectedMovie = films.find(
      (film) => film.title === selectedMovieTitle
    );
    if (selectedMovie) {
      setLocations(selectedMovie.locations);
      setSelectedFilm(selectedMovie.title);
      setFilm(selectedMovie);
    } else {
      setLocations([]); // Clear locations if no film is selected
    }
  };

  // Handle location selection
  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLocationName = event.target.value;

    const selectedLocation = locations.find(
      (location) => location.title === selectedLocationName
    );
    setSelectedLocation(selectedLocation.title);
    setLocation(selectedLocation);
  };

  // Handle comment input
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Submit the form data
    const newPost = {
      movie_id: film.id,
      location_id: location.id,
      review: comment,
      email: user.email,
    };

    // Reset form after submission
    setSelectedFilm("");
    setFilm(null);
    setSelectedLocation("");
    setLocation(null);
    setComment("");
    setLocations([]);

    fetch("http://127.0.0.1:5000/user-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="new-form">
      <h3>Add New Post</h3>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Film: </td>
            <td>
              <select value={selectedFilm} onChange={handleFilmChange}>
                <option value="">Select a film</option>
                {films.map((film) => (
                  <option key={film.id} value={film.title}>
                    {film.title}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Location: </td>
            <td>
              <select
                value={selectedLocation}
                onChange={handleLocationChange}
                disabled={!selectedFilm}
              >
                <option value="">Select a location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location.title}>
                    {location.title}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Review: </td>
            <td>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add your comment"
                rows={4}
                cols={30}
              />
            </td>
          </tr>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
