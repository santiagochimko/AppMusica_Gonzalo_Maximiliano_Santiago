import React from 'react';
import { useState, useEffect } from 'react'
import MatchResult from './views/MatchResult'
import './App.css'
import Home from './views/Home';
import MatchResult from './views/MatchResult';
import Home2 from './views/Home2';
import Searcher from './views/Searcher';


const App = () => {
  const [user, setUser] = useState ();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");    

    var raw = JSON.stringify({
      nombre: "nachito5",
      mail: "nachito@sen5pai.com",
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

  return (
    <>
      {/* <div className="app">
       <Home2 />
      </div>  */}
      
       {/* <div className="app">
        <Home />
      </div> */}
      {/* <MatchScreen /> */}
      {/* {user && <Searcher />} */}
      <Searcher />
    </>
  );
};

export default App;
