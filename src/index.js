import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { VideoListingProvider } from './context/videoListingContext'
import { HistoryProvider} from './context/Historycontext'
import { WatchLaterProvider } from "./context/Watch-later";
import { LikeVideoProvider } from "./context/LikeVideoContext";
import { AuthProvider} from './context/AuthContex'
import { PlaylistProvider } from "./context/PlayListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PlaylistProvider>
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
      </PlaylistProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
