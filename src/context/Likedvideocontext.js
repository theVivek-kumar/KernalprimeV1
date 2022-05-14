import { RepeatOn } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const LikedVideoContext = createContext();
const useLikeVideoContext = () => useContext(LikedVideoContext);

const LikedVideoProvider = ({ children }) => {
  const [likedVideo, setLikeVideo] = useState([]);

  async function getLikeVideo() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/likes",
        headers: { authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        setLikeVideo(response.data.likes);
      }
    } catch (error) {
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
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromLikeVideo(videoId, setLikeVideo) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/likes/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 201) {
        setLikeVideo(response.data.likes);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LikedVideoContext.Provider
      value={{
        likedVideo,
        setLikeVideo,
        getLikeVideo,
        addToLikeVideo,
        removeFromLikeVideo,
      }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
};

export { useLikeVideoContext, LikedVideoProvider };