import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AiProvider from "./contexts/AiContext";
import AuthProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AiProvider>
        <App />
      </AiProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
