// App.js
import React from "react";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
