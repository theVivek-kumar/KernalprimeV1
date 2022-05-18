import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { VideoListingProvider } from './context/videoListingContext'
import {HistoryProvider} from './context/Historycontext'
import { WatchLaterProvider } from "./context/Watch-later";
import { LikeVideoProvider } from "./context/LikeVideoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LikeVideoProvider>
      <WatchLaterProvider>
      <HistoryProvider>
        <VideoListingProvider>
          <App />
        </VideoListingProvider>
        </HistoryProvider>
        </WatchLaterProvider>
        </LikeVideoProvider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById("root")
);
