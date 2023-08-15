import React from "react";
// import { useEffect, useState } from "react";
import '../styles/matchScreen.css'
import arrow from '../assets/left-icon-placeholder.svg'
import cross from '../assets/cross.svg'
import like from '../assets/like.svg'
import singer from '../assets/artist/1.png'
import singer2 from '../assets/artist/2.png'
import { useNavigate } from 'react-router';

const MatchScreen = () =>{
    const navigate = useNavigate();
    const handleHome = () => {
        // Lógica para el botón de inicio de sesión
        navigate (`/home`)
    };
    
    const handlePlaylist = () => {
        // Lógica para el botón de inicio de sesión
        navigate (`/match_result`)
    };  
    
    return (
        <div className="Card">  
            <div className="header">
                <div className="Backgr-degrade"/>
                <div className="top-bar">
                    <img src={arrow} srcSet="" onClick={handleHome}/> 
                    <h1> Cupido musical </h1>
                </div>
            </div>

            <div className="cupid-card">
                <img src={singer} className="singer" /> {/*Las img de los cantantes deberán ser reemplazadas por un objeto del fetch*/}
                <img src={singer2} className="singer2" /> 
                <div className="buttons">
                    <button className="like"><img src={like}/></button> {/*Agregar función que agregue al array la canción que se está visualizando como cantante 1*/}
                    <button className="dislike"><img src={cross}/></button>
                </div>
                <h2>titulo de la canción</h2> {/*Aquí se debe conectar la BD con un fetch para devolver el nombre de la canción*/}
            </div>
            <button className="playlist-button" onClick={handlePlaylist}> 
                Crear Playlist
            </button>
        </div>              
    );   
};

export default MatchScreen;