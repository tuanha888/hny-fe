import { useState } from "react";
import "./App.css";
import { Fireworks } from "fireworks-js";

function App() {
  const container = document.querySelector(".root");
  const fireworks = new Fireworks(container, {
    /* options */
  });
  fireworks.start();
  return <></>;
}

export default App;
