import axios from 'axios';
import Toast from '../components/ToastComp';
import { createContext, useState,useContext } from 'react'

const LikeVideoContext = createContext();
const UseLikeVideoContext = () => useContext(LikeVideoContext);
const LikeVideoProvider = ({ children }) => {
  const [likeVideo, setLikeVideo] = useState([]);
  

    async function getLikeVideo() {
        try {
            const response = await axios({
                method: "GET",
                url: "/api/user/likes",
                headers: { authorization: localStorage.getItem("token") }

            });
            if (response.status === 200) {
                setLikeVideo(response.data.like);
                console.log(response.data.like, "this is like video");
            }
        }catch (error) {
            console.error(error);  
          }
        }
    async function addToLikeVideo(video, setLikeVideo) {
        try {
            const response = await axios({
                method: "POST",
                url: "/api/user/likes",
                headers: { authorization: localStorage.getItem("token") },
                data: { video: video },
            });
            if (response.status === 201) {
              setLikeVideo(response.data.likes);
              
                Toast({ type: "success", msg: "You like this videos" });
            }
        } catch (error) {
          console.log(error);
           Toast({ type: "error", msg: error });
            }
        }
          async function removeFromLikeVideo(videoId, setLikeVideo) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/likes/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setLikeVideo(response.data.likes);
       
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }
    
    function clearLikedVideos() {
        setLikeVideo([]);
    }

  return (
      <LikeVideoContext.Provider value={{ getLikeVideo, setLikeVideo, getLikeVideo, addToLikeVideo, removeFromLikeVideo, clearLikedVideos,likeVideo }}>
          {children}
      </LikeVideoContext.Provider>
  );
};

export { UseLikeVideoContext, LikeVideoProvider };