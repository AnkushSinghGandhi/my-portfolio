import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// detect Windows + approx 125% scaling and add class to html
(function applyWindowsFontAdjust() {
  try {
    const ua = navigator.userAgent || "";
    const platform = navigator.platform || "";
    const isWindows = ua.includes("Windows") || platform.includes("Win");
    const dpr = window.devicePixelRatio || 1;

    // treat DPR near 1.25 as 125% scaling (tolerance ±0.07)
    const is125DPR = Math.abs(dpr - 1.25) <= 0.07;

    if (isWindows && is125DPR) {
      document.documentElement.classList.add("windows-adjust");
    }
  } catch (e) {
    // fail silently (don't block app)
    /* no-op */
  }
})();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
