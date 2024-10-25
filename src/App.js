// App.js
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";

import "./App.css";

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
