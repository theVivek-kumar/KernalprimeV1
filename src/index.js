import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { VideoListingProvider } from'./context/videoListingContext'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <VideoListingProvider>
      <App />
      </VideoListingProvider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById("root")
);
