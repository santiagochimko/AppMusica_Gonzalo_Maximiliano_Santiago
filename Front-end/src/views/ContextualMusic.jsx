import React, { useState, useEffect } from "react";
import "../styles/ContextualMusic.css";
import arrow from "../assets/left-icon-placeholder.svg";
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
    // Fetch filter options from the backend
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
        {occasionOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="">¿Cómo te sientes?:</label>
      <select>
        <option value="">Seleccionar...</option>
        {moodOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="">¿Cómo está el clima?:</label>
      <select>
        <option value="">Seleccionar...</option>
        {weatherOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <section id="labels">
        <h1>Selecciona hasta 3 géneros:</h1>
        <div id="labels-container">
          {genreOptions.map((genre) => (
            <button
              key={genre}
              className={`label ${selectedGenreOptions.includes(genre) ? "selected" : ""}`}
              onClick={() => handleGenreClick(genre)}
              style={{
                backgroundColor: selectedGenreOptions.includes(genre) ? "black" : "",
                color: selectedGenreOptions.includes(genre) ? "white" : "",
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      <div className="btm-gradient"></div>
    </main>
  );
};

export default ContextualMusic;
