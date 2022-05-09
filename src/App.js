import "./App.css";
import "./components/navbar.css"
import LandingPage from "./page/landingPage";
import SingleVideoPage from "./page/SingleVideoPage";
import VideoListing from "./page/videoListing";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <VideoListing />
      <SingleVideoPage/>
    </div>
  );
}

export default App;
