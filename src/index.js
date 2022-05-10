import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoListingProvider } from "./components/context/videoListingContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoListingProvider>
      <App />
      </VideoListingProvider>
    </React.StrictMode>,
  document.getElementById("root")
);
