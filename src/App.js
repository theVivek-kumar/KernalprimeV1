import "./App.css";
import { Routes, Route } from "react-router-dom";
import './components/login/login.css'
import './components/SignIn/SignIn.css'
import LandingPage from "./page/landingPage";
import SingleVideoPage from "./page/SingleVideoPage";
import VideoListing from "./page/videoListing";
import WatchLaterpage from "./page/WatchLaterpage";
import HistoryPage  from "./page/History-page";
import LikeVideoPage from "./page/LikeVideoPage";
import SignIn from "./components/SignIn/SignIn";
import Login from "./components/login/Login";
import PlaylistPage from './page/Playlist'
import AuthComp from './components/Auth';
import { ToastContainer } from "react-toastify";
import PlayModel from "./components/PlayModel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/videoListing' element={<VideoListing />} />
        <Route path='/singleVideoPage/:videoId' element={<SingleVideoPage />} />
        {/* private-route */}

        <Route path='/watchLater' element={<AuthComp><WatchLaterpage /></AuthComp>} />
        <Route path='/historyPage' element={<AuthComp><HistoryPage /></AuthComp>} />
        <Route path='/likeVideo' element={<AuthComp><LikeVideoPage /></AuthComp>} />
        <Route path='/playList' element={<AuthComp><PlaylistPage/></AuthComp>} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/playmodel' element={<PlayModel />} />

      </Routes>
       <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
