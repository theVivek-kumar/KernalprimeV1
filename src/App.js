import "./App.css";
// import MockAPI from './mockman/MockAPI'
import { Routes, Route } from "react-router-dom";
import "./components/navbar.css"
import './components/login/login.css'
import './components/SignIn/signIn.css'
import LandingPage from "./page/landingPage";
import SingleVideoPage from "./page/SingleVideoPage";
import VideoListing from "./page/videoListing";
import WatchLaterpage from "./page/WatchLaterpage";
import  HistoryPage  from "./page/History-page";
import LikeVideoPage from "./page/LikeVideoPage";
import SignIn from "./components/SignIn/SignIn";
import Login from "./components/login/Login";
import PlayList from "./components/PlayList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/videoListing' element={<VideoListing/>}/>
        <Route path='/singleVideoPage/:videoId' element={<SingleVideoPage />} />
        <Route path='/watchLater' element={<WatchLaterpage />} />
        <Route path='/historyPage' element={<HistoryPage />} />
        <Route path='/likeVideo' element={<LikeVideoPage />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/playList' element={<PlayList />} />
        
        
      </Routes>
      
    </div>
  );
}

export default App;
