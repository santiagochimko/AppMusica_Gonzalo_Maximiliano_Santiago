import React from "react";
// import { useEffect, useState } from "react";
import "../styles/matchResult.css";
import arrow from "../assets/left-icon-placeholder.svg";
import singer from "../assets/artist/1.png";
import singer2 from "../assets/artist/2.png";
import singer3 from "../assets/artist/3.png";
import singer4 from "../assets/artist/4.png";

import Home from "./Home";
import BottomBar from "../components/BottomBar";


const MatchResult = () => {
  // const [data, setdata] = useState();

  return (
    <div className="Card">
      <div className="header">
        <div className="Backgr-degrade" />
        <div className="top-bar">
          <img
            src={arrow}
            srcSet="" /*Dentro de srcSet crear vínculo para regresar a Home*//>
          <div className="titles">
            <h3> Generada del Cupido musical </h3>
            <h1>-Nombre de la playlist-</h1>
          </div>
        </div>
        <div>Hamburger</div>
      </div>

      <div className="singer">
        {/*esto genera una foto que está subcompuesta por 4 fotos*/}
        <img src={singer} className="singer2" />
        <img src={singer2} className="singer2" />
        <img src={singer3} className="singer3" />
        <img src={singer4} className="singer2" />
      </div>
      <div className="actions-bar" >
        -icon- -verified- -share- -duration- -historial-
      </div>
      <div>-create copy- -Random/inline song- -play-</div>
      <div className="Songs">
        mapeo de las canciones -hamburger-<br></br>
        mapeo de las canciones -hamburger-<br></br>
        mapeo de las canciones -hamburger-<br></br>
        mapeo de las canciones -hamburger-<br></br>
      </div>
     <BottomBar/>

    </div>
  );
};

export default MatchResult;
