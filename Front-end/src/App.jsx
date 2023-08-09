import { useState } from 'react'
// import matchScreen from './components/matchScreen'
import './App.css'
import React from 'react';
import Home from './views/Home';

// function App() {
//   const [count, setCount] = useState(0)
  

const App = () => {
  return (
    <>
      {/* <matchScreen /> */}
      <div className="app">
        <Home />
      </div>
    </>
  );
};

export default App;
