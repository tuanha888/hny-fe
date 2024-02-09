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
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
        }}
      />
    </>
  );
}

export default App;
