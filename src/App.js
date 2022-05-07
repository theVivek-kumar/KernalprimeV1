import "./App.css";
import "./components/navbar.css"
import LandingPage from "./page/landingPage";
import VideoListing from "./page/videoListing";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <VideoListing/>
     
    </div>
  );
}

export default App;
