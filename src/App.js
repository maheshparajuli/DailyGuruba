import React, { useState } from "react";
import "./App.css";

function App() {
  // Use state to manage the content of the <h1> element
  const [heading, setHeading] = useState("Let's Start!");

  // Function to update the state
  const clickme = () => {
    setHeading("A new beginning");
  };

  return (
    <div>
      {/* Use the state variable 'heading' to set the content of <h1> */}
      <h1 id="newid">{heading}</h1>
      {/* Corrected the onClick syntax */}
      <button onClick={clickme}>Click me Lekhnath</button>
    </div>
  );
}

export default App;
