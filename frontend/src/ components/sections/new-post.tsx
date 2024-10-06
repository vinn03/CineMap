import React, { useState } from "react";
import "./sections.css";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    director: "Frank Darabont",
    locations: [
      {
        title: "Ohio State Reformatory",
        lat: "40.784271836610586",
        lng: "-82.50227715529661",
        img: "./images/the-shawshank-redemption/ohio-state-reformatory.jpg",
      },
      {
        title: "Buxton (final scene)",
        lat: "40.616678906238306",
        lng: "-82.42907434417643",
        img: "./images/the-shawshank-redemption/buxton.jpg",
      },
      {
        title: "Zihuatanejo Beach",
        lat: "17.641896203692394",
        lng: "-101.55143258223899",
        img: "./images/the-shawshank-redemption/zihuatanjo.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    director: "Francis Ford Coppola",
    locations: [
      {
        title: "Staten Island (Corleone Compound)",
        lat: "37.81395046855017",
        lng: "13.29897458237543",
        img: "./images/the-godfather/staten-island.jpg",
      },
      {
        title: "Beverly Estate, California",
        lat: "34.08934356885367",
        lng: "-118.4135521248571",
        img: "./images/the-godfather/beverly-estate.jpg",
      },
      {
        title: "Savoca, Sicily (Bar Vitelli)",
        lat: "137.95591998387975",
        lng: "15.33980781391331",
        img: "./images/the-godfather/bar-vitelli.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    director: "Christopher Nolan",
    locations: [
      {
        title: "Lower Wacker Drive, Chicago",
        lat: "-41.88164680857383",
        lng: "87.6364112891491",
        img: "./images/the-dark-knight/lower-wacker-drive.jpg",
      },
      {
        title: "Trump Tower, Chicago",
        lat: "41.88893915176258",
        lng: "-87.62639473457322",
        img: "./images/the-dark-knight/trump-tower.jpg",
      },
      {
        title: "Cardington Airship Hangars, UK",
        lat: "52.10694349426365",
        lng: "-0.4290663624661803",
        img: "./images/the-dark-knight/cardington-airship-hangards.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "The Shining",
    year: 1980,
    genre: "Horror",
    director: "Stanley Kubrick",
    locations: [
      {
        title: "Timberline Lodge, Oregon (Overlook Hotel exterior)",
        lat: "45.33132417475016",
        lng: "-121.71045923237924",
        img: "./images/the-shining/timberline-lodge.jpg",
      },
      {
        title: "Elstree Studios, UK (interior scenes)",
        lat: "51.658213084020844",
        lng: "-0.26921434501729724",
        img: "./images/the-shining/elstree-studios.jpg",
      },
      {
        title: "The Ahwahnee Hotel, California (Overlook inspiration)",
        lat: "37.746202674051936",
        lng: "-119.5743010891959",
        img: "./images/the-shining/the-ahwahee-hotel.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    director: "Damien Chazelle",
    locations: [
      {
        title: "Griffith Observatory, Los Angeles",
        lat: "34.11857618802142",
        lnt: "-118.3003827745735",
        img: "./images/lalaland/griffith-observatory.jpg",
      },
      {
        title: "Angels Flight, Los Angeles",
        lat: "-34.05183196551239",
        lng: "-118.25062175312848",
        img: "./images/lalaland/angels-flight.jpg",
      },
      {
        title: "Colorado Street Bridge, Pasadena",
        lat: "34.144792717761526",
        lng: "-118.16445995738451",
        img: "./images/lalaland/colorado-street-bridge.jpg",
      },
    ],
  },
];

const NewPost: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<string>("");
  const [locations, setLocations] = useState<Array<{ title: string }>>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Handle film selection
  const handleFilmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMovieTitle = event.target.value;
    setSelectedFilm(selectedMovieTitle);

    // Find the selected movie and update the location dropdown
    const selectedMovie = movies.find(
      (movie) => movie.title === selectedMovieTitle
    );
    if (selectedMovie) {
      setLocations(selectedMovie.locations);
    } else {
      setLocations([]); // Clear locations if no film is selected
    }
  };

  // Handle location selection
  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLocation(event.target.value);
  };

  // Handle comment input
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    // Reset form after submission
    setSelectedFilm("");
    setSelectedLocation("");
    setComment("");
    setLocations([]);
  };

  return (
    <div className="new-form">
      <h3>Add New Post</h3>
      <table>
        <tr>
          <td>Film: </td>
          <td>
            <select value={selectedFilm} onChange={handleFilmChange}>
              <option value="">Select a film</option>
              {movies.map((film) => (
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
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default NewPost;
