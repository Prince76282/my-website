import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import SplashCursor from "../reactbits/SplashCursor/SplashCursor";
import BlobCursor from "../reactbits/BlobCursor/BlobCursor"; // Custom cursor component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <BlobCursor/>
      {/* <SplashCursor/> */}
      
    </Router>
  </React.StrictMode>
);
