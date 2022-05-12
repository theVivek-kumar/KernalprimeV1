import "./App.css";
// import MockAPI from './mockman/MockAPI'
import {Routes,Route} from 'react-router-dom';
import "./components/navbar.css"
import LandingPage from "./page/landingPage";
import SingleVideoPage from "./page/SingleVideoPage";
import VideoListing from "./page/videoListing";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
         <Route path='/videoListing' element={<VideoListing/>}/>
           <Route path='/singleVideoPage' element={<SingleVideoPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
