import { useState } from "react";
import "./App.css";
import Fireworks, { FireworksOptions } from "@fireworks-js/react";

function App() {
  const fireworksOptions: FireworksOptions = {
    autoresize: true,
    //lineStyle: "round",
    flickering: 50,
    traceLength: 3,
    traceSpeed: 10,
    intensity: 30,
    explosion: 5,
    gravity: 1.5,
    opacity: 0.5,
    particles: 60,
    friction: 0.97,
    acceleration: 1.02,
    hue: {
      min: 0,
      max: 345,
    },
    rocketsPoint: {
      min: 50,
      max: 50,
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3,
      },
      trace: {
        min: 1,
        max: 2,
      },
    },
    mouse: {
      click: false,
      move: false,
      max: 1,
    },
    delay: {
      min: 15,
      max: 30,
    },
    brightness: {
      min: 50,
      max: 80,
    },
    decay: {
      min: 0.015,
      max: 0.03,
    },
    sound: {
      enabled: true,
      files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
      volume: {
        min: 4,
        max: 21,
      },
    },
    boundaries: {
      height: 0,
      width: 0,
      x: 50,
      y: 50,
    },
  };

  return <Fireworks className="fireworks" options={fireworksOptions} />;
}

export default App;
