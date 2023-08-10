import "../styles/Registration.css";
import { Link } from "react-router-dom";
import arrowLeftImage from "../assets/left-icon-placeholder.svg";
import Button from "../Components/Button";

const Registration = () => {
  return (
    <main id="main-registration">
        <div className='top-gradient'></div>
      <div className="heading">
        <Link to="/">
          <button className="arrow_back">
            <img src={arrowLeftImage} alt="close modal" />
          </button>
        </Link>
        <h2>Crear Cuenta</h2>
      </div>
      <h1>¿Cuál es tu correo electrónico?</h1>
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"        
      />
      <p>Deberás poder confirmarlo luego.</p>
      <Button className="btn_continue" text='Continuar' />
      <div className='btm-gradient'></div>
    </main>
  );
};

export default Registration;
