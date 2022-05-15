import "./App.css";
// import MockAPI from './mockman/MockAPI'
import { Routes, Route } from "react-router-dom";
import "./components/navbar.css"
import LandingPage from "./page/landingPage";
import SingleVideoPage from "./page/SingleVideoPage";
import VideoListing from "./page/videoListing";
import WatchLaterpage from "./page/WatchLaterpage";
import { HistoryPage } from "./page/History-page";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/videoListing' element={<VideoListing/>}/>
        <Route path='/singleVideoPage/:videoId' element={<SingleVideoPage />} />
        <Route path='/watchLater' element={<WatchLaterpage />} />
        <Route path='/historyPage' element={<HistoryPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
