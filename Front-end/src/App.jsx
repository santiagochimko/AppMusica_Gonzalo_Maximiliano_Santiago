import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './views/Home';

  const App = () => {
    const [user, setUser] = useState ();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");    

    var raw = JSON.stringify({
      nombre: "nachito5",
      mail: "nachito5@sen5pai.com",
      contrasenia: "token"
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include"
    };

    fetch("http://localhost:3000/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {setUser(result); console.log(result)})
      .catch((error) => console.log("error", error));
      
  }, []);
  console.log(user)
    return (
      <Home></Home>
    );
  };

export default App;