import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GalleryProvider from "./components/context/GalleryContext";

ReactDOM.render(
  <React.StrictMode>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
