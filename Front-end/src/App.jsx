import React from "react";
import { useState } from "react";
import MatchScreen from "./views/matchScreen";
import "./App.css";

import Home from "./views/Home";

const App = () => {
  return (
    <>
      <div className="app">
        <Home />
      </div>
      {/* <MatchScreen /> */}
    </>
  );
};

export default App;
