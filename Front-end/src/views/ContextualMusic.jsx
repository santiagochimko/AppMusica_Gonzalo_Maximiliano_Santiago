import React, { useState, useEffect } from "react";
import "../styles/ContextualMusic.css";
import arrow from "../assets/left-icon-placeholder.svg";
import { useNavigate } from "react-router";

const ContextualMusic = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/home`);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "Ejercicio Físico",
    "Limpieza",
    "Celebración",
    "Dormir",
    "Meditar",
    "Social",
    "Estudiar",
    "Relajación",
    "Viajando",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedMood, setSelectedMood] = useState("");
  const moods = [
    "Animado",
    "Sereno",
    "Feliz",
    "Divertido",
    "Tranquilo",
    "Motivado",
    "Aventurero",
    "Relajado",
    "Concentrado",
  ];

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  const [selectedWeather, setSelectedWeather] = useState("");
  const weatherOptions = ["Despejado", "Soleado", "Lluvioso", "Nublado"];

  const handleWeatherChange = (event) => {
    setSelectedWeather(event.target.value);
  };

  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [
    "Rock",
    "Country",
    "Soul",
    "Jazz",
    "Blues",
    "Hip-Hop",
    "Pop",
    "Reggae",
    "Folk",
    "R&B",
    "Clásico",
    "Alternativo",
    "EDM",
    "Electrónica",
    "Disco",
    "New Age",
    "Punk",
  ];

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selected) => selected !== genre)
      );
    } else {
      if (selectedGenres.length < 3) {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  };

  return (
    <main id="main-searcher">
      <div className="top-gradient"></div>
      <div className="header">
        <div className="top-bar">
          <img src={arrow} srcSet="" onClick={handleHome} />
          <h1> Música Contextual </h1>
        </div>
      </div>

      <label htmlFor="">Nombre Playlist:</label>
      <input type="text" name="" id="" />

      <label htmlFor="">¿Cual es la ocasión?:</label>
      <select id="task" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Seleccionar...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* {selectedOption && <p>Ha seleccionado: {selectedOption}</p>} */}

      <label htmlFor="">¿Cómo te sientes?:</label>
      <select id="mood" value={selectedMood} onChange={handleMoodChange}>
        <option value="">Estado de Ánimo</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood}
          </option>
        ))}
      </select>
      {/* {selectedMood && <p>Su estado de ánimo seleccionado: {selectedMood}</p>} */}

      <label htmlFor="">¿Cómo está el clima?:</label>
      <select
        id="weather"
        value={selectedWeather}
        onChange={handleWeatherChange}
      >
        <option value="">Clima</option>
        {weatherOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* {selectedWeather && <p>Clima seleccionado: {selectedWeather}</p>} */}
      <section id="labels">
        <h1>Selecciona hasta 3 géneros:</h1>
        <div id="labels-container">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`label ${
                selectedGenres.includes(genre) ? "selected" : ""
              }`}
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
