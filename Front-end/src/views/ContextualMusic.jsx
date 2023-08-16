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
  const [selectedGenres, setSelectedGenres] = useState([]);

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
        setSelectedGenres(data.genero);
      })
      .catch((error) => {
        console.error("Error fetching filter options:", error);
      });
  }, []);

// Function to handle genre button clicks
const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(prevGenres => prevGenres.filter((g) => g !== genre));
    } else {
      if (selectedGenres.length < 3) {
        setSelectedGenres(prevGenres => [...prevGenres, genre]);
      }
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
          {selectedGenres.map((genre) => (
            <button
              key={genre}
              className={`label ${selectedGenres.includes(genre) ? "selected" : ""}`}
              onClick={() => handleGenreClick(genre)}
              style={{
                backgroundColor: selectedGenres.includes(genre) ? "black" : "",
                color: selectedGenres.includes(genre) ? "white" : "",
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
