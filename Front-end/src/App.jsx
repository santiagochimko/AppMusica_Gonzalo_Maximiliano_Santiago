import React from 'react';
import { useState } from 'react'
import MatchResult from './views/MatchResult'
import './App.css'

import Home from './views/Home';
import BottomBar from './components/BottomBar';


const App = () => {
  return (
    <>
      <div className="app">
        <BottomBar id="1"/>
        <MatchResult />
        
      </div> 
      
       {/* <div className="app">
        <Home />
      </div>   */}
    </>
  );
};

export default App;
