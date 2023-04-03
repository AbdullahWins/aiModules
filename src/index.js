import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AiProvider from "./contexts/AiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AiProvider>
      <App />
    </AiProvider>
  </React.StrictMode>
);

reportWebVitals();
