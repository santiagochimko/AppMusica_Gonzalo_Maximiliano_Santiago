import React, { useState, useEffect } from "react";
import "../styles/ContextualMusic.css";
import arrow from "../assets/left-icon-placeholder.svg";
import Button from "../Components/Button";
import { useNavigate } from "react-router";

const ContextualMusic = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/home`);
  };

  const [occasionOptions, setOccasionOptions] = useState([]);
  const [moodOptions, setMoodOptions] = useState([]);
  const [weatherOptions, setWeatherOptions] = useState([]);
  const [selectedGenreOptions, setSelectedGenreOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("http://localhost:3000/user/filtros", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setOccasionOptions(data.ocasion);
        setMoodOptions(data.estado);
        setWeatherOptions(data.clima);
        setGenreOptions(data.genero);
      })
      .catch((error) => {
        console.error("Error fetching filter options:", error);
      });
  }, []);

  const handleGenreClick = (genre) => {
    if (selectedGenreOptions.includes(genre)) {
      setSelectedGenreOptions((prevGenres) =>
        prevGenres.filter((selected) => selected !== genre)
      );
    } else if (selectedGenreOptions.length < 3) {
      setSelectedGenreOptions((prevGenres) => [...prevGenres, genre]);
    }
  };

  return (
    <main id="main-searcher">
      <div className="top-gradient"></div>
      <div className="header">
        <div className="top-bar">
          <img src={arrow} srcSet="" onClick={handleHome} alt="Go Home" />
          <h1> Música Contextual </h1>
        </div>
      </div>

      <label htmlFor="">Nombre Playlist:</label>
      <input type="text" name="" id="" />

      <label htmlFor="">¿Cual es la ocasión?:</label>
      <select>
        <option value="">Seleccionar...</option>
        {occasionOptions.map((option, index) => (
          <option key={`occasion-${index}`} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>

      <label htmlFor="">¿Cómo te sientes?:</label>
      <select>
        <option value="">Seleccionar...</option>
        {moodOptions.map((option, index) => (
          <option key={`mood-${index}`} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>

      <label htmlFor="">¿Cómo está el clima?:</label>
      <select>
        <option value="">Seleccionar...</option>
        {weatherOptions.map((option, index) => (
          <option key={`weather-${index}`} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>

      <section id="labels">
        <h1>Selecciona hasta 3 géneros:</h1>
        <div id="labels-container">
          {genreOptions.map((genre, index) => (
            <button
              key={`genre-${index}`}
              className={`label ${
                selectedGenreOptions.includes(genre.nombre) ? "selected" : ""
              }`}
              onClick={() => handleGenreClick(genre.id)}
              style={{
                backgroundColor: selectedGenreOptions.includes(genre.id)
                  ? "black"
                  : "",
                color: selectedGenreOptions.includes(genre.id) ? "white" : "",
              }}
            >
              {genre.nombre}
            </button>
          ))}
        </div>
      </section>
      <Button id="btnPlaylist" text="Crear Playlist" />
    </main>
  );
};

export default ContextualMusic;
