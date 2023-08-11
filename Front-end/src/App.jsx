import React from 'react';
import { useState } from 'react'
import MatchScreen from './views/matchScreen'
import './App.css'

import Home from './views/Home';


const App = () => {
  return (
    <>
      <div className="app">
        <MatchScreen />
      </div> 
      
       {/* <div className="app">
        <Home />
      </div>   */}
    </>
  );
};

export default App;
