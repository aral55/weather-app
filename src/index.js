import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import data from "./data/forecast.json";
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={data.location} forecasts={data.forecasts} />
  </React.StrictMode>,
  document.getElementById("root")
);
