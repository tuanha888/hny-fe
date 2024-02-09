import { useRef, useState } from "react";
import "./App.css";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";

function App() {
  const ref = useRef<FireworksHandlers>(null);

  // const toggle = () => {
  //   if (!ref.current) return;
  //   if (ref.current.isRunning) {
  //     ref.current.stop();
  //   } else {
  //     ref.current.start();
  //   }
  // };

  return (
    <>
      <Fireworks
        ref={ref}
        options={{
          opacity: 0.5,
          sound: {
            enabled: true,
            files: [
              location.href + "sounds/explosion0.mp3",
              location.href + "sounds/explosion1.mp3",
              location.href + "sounds/explosion2.mp3",
            ],
            volume: {
              min: 4,
              max: 21,
            },
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "rgba(0,0,0,0.9)",
        }}
      />
    </>
  );
}

export default App;
