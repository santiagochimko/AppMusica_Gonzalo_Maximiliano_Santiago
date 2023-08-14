import React from "react"
import "../styles/BottomBar.css"
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import friends from "../assets/friends.svg";


const BottomBar = () =>{

    return(
    <div className="bottom-bar">
        <button className="bottom-buttons">
            <img src={home} alt="" />
            Inicio
        </button>
        <button className="bottom-buttons">
            <img src={search} alt="" />
            Buscar
        </button>
        <button className="bottom-buttons">
            <img src={user} alt="" />
            Usuario
        </button>
        <button className="bottom-buttons">
            <img src={friends} alt="" />
            Amigos
        </button>
    </div>
    )
}

export default BottomBar;