import React from 'react';
import { useState } from 'react'

import './App.css'

import Home from './views/Home';
import MatchResult from './views/MatchResult'
import Home2 from './views/Home2';


const App = () => {
  return (
    <>
      <div className="app">
       <Home2 />
      </div> 
      
       {/* <div className="app">
        <Home />
      </div>   */}
    </>
  );
};

export default App;
