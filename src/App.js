import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./components/navbar.css"
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
import PlayList from "./components/PlayList";
import AuthComp from './components/Auth'

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
        <Route path='/playList' element={<AuthComp></AuthComp>} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/LogIn' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
