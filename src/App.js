import logo from './logo.svg';
import styles from "./App.css"
import React from "react";
import Home from "./Pages/Home/Home";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
console.log(styles);
function App() {
  return (
      <Home />
  );
}

export default App;
