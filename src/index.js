import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
  const elem = root.render(
    <div>
      <h1>Hi fetens</h1>
      <h3>it is{new Date().toLocaleTimeString()}</h3>
    </div>
  );
};

setInterval(() => {
  tick();
}, 1000);
