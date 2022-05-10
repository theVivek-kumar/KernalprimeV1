import axios from "axios";
import { useState, useContext,useEffect,createContext} from 'react';
const VideoListingContext = createContext();
const useVideoListing = () => useContext(VideoListingContext);
const VideoListingProvider = ({ children }) => {
const [videoList, setVideolist] = useState([]);
const [category, setCategory] = useState([]);

  async function getVideoData() {
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
          setVideolist(response.data.videos);
          console.log(response.data.videos);
          
        
      }
    } catch (error) {
      console.error(error);
    }
    }
    console.log(videoList)
    
  useEffect(() => {
    getVideoData();
  }, []);

  async function getAllCategory() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/categories",
      });

      if (response.status === 200) {
        setCategory(response.data.categories);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getCategory(categoryId) {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/categories/${categoryId}`,
      });

      if (response.status === 200) {
        setCategory(response.data.category);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <VideoListingContext.Provider
      value={{
        videoList,
        setVideolist,
        category,
        setCategory,
        getAllCategory,
        getCategory,
      }}
    >
      {children}
    </VideoListingContext.Provider>
  );
};

export { useVideoListing, VideoListingProvider };