import React from 'react'
import './App.css';
import { Navbar } from "./Components/Navbar/Navbar.js";
import { Intro } from "./Components/intro/Intro.js";
import Services from './Components/Services/Services';
import Experiance from './Components/Experiance/Experiance';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';


function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : ' ',
        color: darkMode ? 'White' : ' '
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
