import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoListingProvider } from "./components/context/videoListingContext";

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
