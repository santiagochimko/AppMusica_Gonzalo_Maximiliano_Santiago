import React, { useState } from "react";
import "../styles/Registration.css";
import { Link } from "react-router-dom";
import arrowLeftImage from "../assets/left-icon-placeholder.svg";
import Button from "../Components/Button";

const RegistrationStep2 = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const isUserNameValid = userName.trim() !== "";
  const isPasswordValid = password.length >= 8;

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
      <input
        type="text"
        id="userName"
        name="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {!isUserNameValid && <p>El nombre de usuario no puede estar vacío.</p>}

      <label id="pswlabel" htmlFor="psw">Contraseña:</label>
      <input
        type="password"
        id="psw"
        name="psw"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isPasswordValid && (
        <p>La contraseña debe contener al menos 8 caracteres.</p>
      )}

      <label id="check" htmlFor="check1">
        <input
          type="checkbox"
          id="check1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        He leído y acepto los <span>Términos</span> y <span>Condiciones</span>.
      </label>

      <Button
        className={`btn_continue ${isUserNameValid && isPasswordValid && isChecked ? "valid-user-pass" : ""}`}
        text="Continuar"
        disabled={!isUserNameValid || !isPasswordValid || !isChecked}
      />
      <div className="btm-gradient"></div>
    </main>
  );
};

export default RegistrationStep2;
