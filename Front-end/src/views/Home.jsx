import React from 'react';
import Button from '../Components/Button';
import '../styles/Home.css';
import logo from '../assets/logo-large.svg';
import { useNavigate } from 'react-router';


const Home = () => {
  
  const navigate = useNavigate();
  const handleRegistration = () => {
    // Lógica para el botón de registro
    
    navigate (`/registration_step_1`)
  };

  const handleGoogleLogin = () => {
    // Lógica para el botón de inicio de sesión con Google
  };

  const handleAppleLogin = () => {
    // Lógica para el botón de inicio de sesión con Apple
  };

  const handleLogin = () => {
    // Lógica para el botón de inicio de sesión
  };  

  return (
    <main>      
      <div id='top-gradient-home'></div>
      <header>        
        <img src={logo} alt='logo' />
        <h1>Música a medida.</h1>
      </header>
      <section>        
        <Button id='Btn_Registration' text='Registrarse Gratis' onClick={handleRegistration} />
        <Button text='Continuar con Google' onClick={handleGoogleLogin} />
        <Button text='Continuar con Apple' onClick={handleAppleLogin} />
        <Button id='Btn_LogIn' text='Iniciar Sesión' onClick={handleLogin} />
      </section>     
    <div id='btm-gradient-home'></div>
    </main>
  );
};

export default Home;
