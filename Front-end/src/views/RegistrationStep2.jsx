import React, { useState } from "react";
import "../styles/Registration.css";
import { Link } from "react-router-dom";
import arrowLeftImage from "../assets/left-icon-placeholder.svg";
import Button from "../Components/Button";

const RegistrationStep2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main id="main-registration">
      <div className="top-gradient"></div>
      <div className="heading">
        <Link to="/">
          <button className="arrow_back">
            <img src={arrowLeftImage} alt="close modal" />
          </button>
        </Link>
        <h2>Crear Cuenta</h2>
      </div>
      <h1>Ingresa un nombre de usuario y contraseña.</h1>
      <label htmlFor="userName">Nombre de Usuario:</label>
      <input type="text" id="userName" name="userName" />
      <label htmlFor="psw">Contraseña:</label>
      <input type="password" id="psw" name="psw" />
      <p>Deberá contener al menos 8 caracteres.</p>

      <label id="check" for="check1">
        <input
          type="checkbox"
          id="check1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        He leído y acepto los Términos y Condiciones.
      </label>
      <Button className={`btn_continue`} text="Continuar" />
      <div className="btm-gradient"></div>
    </main>
  );
};

export default RegistrationStep2;
