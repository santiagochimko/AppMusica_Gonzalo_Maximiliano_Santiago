import React, { useState } from "react";
import "../styles/Registration.css";
import { Link } from "react-router-dom";
import arrowLeftImage from "../assets/left-icon-placeholder.svg";
import Button from "../Components/Button";
import eyeSvg from "../assets/eye.svg";
import eyeOpenSvg from "../assets/eye_open.svg";
import { useNavigate } from "react-router";

const RegistrationStep2 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 8);
  };
  const handleLogin = async () => {
    // Lógica para el botón de inicio de sesión
    const requestOptions = {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        nombre: userName,
        contrasenia: password,
        mail: localStorage.getItem("mail"),
      }),
    };
    await fetch("http://localhost:3000/auth/register", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          navigate(`/login`);
        }

        return response.json();
      })

      .then((response) => console.log(response));
  };

  return (
    <main id="main-registration">
      <div className="top-gradient"></div>
      <div className="heading">
        <Link to="/registration_step_1">
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
      {!userName && (
        <p className="msj_alert">El nombre de usuario no puede estar vacío.</p>
      )}

      <label
        className={`pswlabel ${
          !isPasswordValid ? "invalid-password-text" : ""
        }`}
        htmlFor="psw"
      >
        Contraseña:
      </label>
      <div
        className={`password-input-container ${
          !isPasswordValid ? "invalid-password" : ""
        }`}
      >
        <input
          type={showPassword ? "text" : "password"}
          id="psw"
          name="psw"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <img src={eyeOpenSvg} alt="Mostrar contraseña" />
          ) : (
            <img src={eyeSvg} alt="Ocultar contraseña" />
          )}
        </span>
      </div>
      <p
        className={`msj_alert ${
          !isPasswordValid ? "invalid-password-text" : "invisible"
        }`}
      >
        La contraseña debe contener al menos 8 caracteres.
      </p>

      <label id="check" htmlFor="check1">
        <input
          type="checkbox"
          id="check1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        He leído y acepto los Términos y Condiciones.
      </label>

      <Button
        className={`btn_continue ${
          userName && isPasswordValid && isChecked ? "valid-email" : ""
        }`}
        text="Continuar"
        disabled={!userName || !isPasswordValid || !isChecked}
        onClick={handleLogin}
      />

      <div className="btm-gradient"></div>
    </main>
  );
};

export default RegistrationStep2;
