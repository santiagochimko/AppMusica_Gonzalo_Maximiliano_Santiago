import React, { useState, useEffect } from "react";
import "../styles/UserProfile.css";
import BottomBar from "../components/BottomBar";
import fotoPerfil from "../assets/Rectangle2.png";
import cogwheel from "../assets/btn-circle-small.svg";
import singer from "../assets/artist/1.png";
import singer2 from "../assets/artist/2.png";
import singer3 from "../assets/artist/3.png";
import singer4 from "../assets/artist/4.png";

const UserProfile = () => {  

const [profileData, setProfileData] = useState({
  name: "",
  username: ""
});

useEffect(() => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    credentials: "include",
  };

  fetch("http://localhost:3000/user/perfil", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setProfileData(data.playlists);    
    })
    .catch((error) => {
      console.error("Error fetching filter options:", error);
    });
}, []);

console.log(profileData);

  return (
    <main id="main-searcher">
      <div className="user-top-gradient"></div>
      <header id="profile-header">
        <div className="profile-container">
          <img src={fotoPerfil} alt="foto de perfil" />
          <button>
            <img src={cogwheel} alt="icono configuracion" />
          </button>
        </div>
        <h1></h1>
        <h2>@</h2>
      </header>
      <div className="dividerContainer">
        <h2>Mis Playlists</h2>
        <div className="divider"></div>
        <button>Crear Playlist</button>
      </div>
      <section id="playlistContainer">
        <article className="playlistCard">
          <div className="sssinger">
            <img src={singer} className="sssinger2" />
            <img src={singer2} className="sssinger2" />
            <img src={singer3} className="sssinger3" />
            <img src={singer4} className="sssinger2" />
          </div>
          <h2 className=""></h2>
          <h3 className=""></h3>
        </article>
        <article className="playlistCard">
          <div className="sssinger">
            <img src={singer} className="sssinger2" />
            <img src={singer2} className="sssinger2" />
            <img src={singer3} className="sssinger3" />
            <img src={singer4} className="sssinger2" />
          </div>
          <h2 className=""></h2>
          <h3 className=""></h3>
        </article>
      </section>

      <BottomBar />
    </main>
  );
};

export default UserProfile;
