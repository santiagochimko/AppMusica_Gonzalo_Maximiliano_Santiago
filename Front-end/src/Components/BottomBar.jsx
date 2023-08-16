import React from "react"
import "../styles/BottomBar.css"
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import friends from "../assets/friends.svg";
import { useNavigate } from 'react-router';

const BottomBar = () =>{
    const navigate = useNavigate();
    const handleHome = () => {
            // Lógica para el botón de inicio de sesión
            navigate (`/home`)
    };
    const handleSearch = () => {
        // Lógica para el botón de inicio de sesión
        navigate (`/searcher`)
    };
    const handleProfile = () => {
        // Lógica para el botón de inicio de sesión
        navigate (`/user_profile`)
    };

    return(
        



    <div className="bottom-bar">
        <button className="bottom-buttons">
            <img src={home} alt="" onClick={handleHome} />
            Inicio
        </button>

        <button className="bottom-buttons">
            <img src={search} alt="" onClick={handleSearch}/>
            Buscar
        </button>

        <button className="bottom-buttons">
            <img src={user} alt="" onClick={handleProfile}/>
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