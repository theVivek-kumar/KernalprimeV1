import axios from "axios";
import { Toast } from "../components/Toast/Toast";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();
const usePlaylistContext = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const [display, setDisplay] = useState("none");

  const toggleModal = () => {
    setDisplay(display === "none" ? "block" : "none");
  };

  async function getPlaylists(setPlaylist) {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/playlists",
        headers: { authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        setPlaylist(response.data.playlists);
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function addPlaylists(playlistName, setPlaylist) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/playlists",
        headers: { authorization: localStorage.getItem("token") },
        data: {
          playlist: {
            title: { playlistName },
            description: "this is description ",
          },
        },
      });

      if (response.status === 201) {
        setPlaylist(response.data.playlists);
        Toast({ type: "success", msg: `${playlistName} playlist created` });
      }
    } catch (error) {
      console.error("this is error", error);
      Toast({ type: "error", msg: error });
    }
  }

  async function removePlaylist(playlistId, setPlaylist) {
    try {
      const response = axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setPlaylist(response.data.playlists);
        Toast({ type: "info", msg: `Playlist removed ` });
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function getPlaylist(playlistId, setPlaylist) {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        setPlaylist(response.data.playlist);
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function addToPlaylist(cardData, playlistId, setPlaylist, toggle) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/playlists/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: cardData },
      });

      if (response.status === 201) {
        const updatedPlayList = playlist.map((playlist) => {
          if (playlist._id === response.data.playlist._id) {
            return { ...response.data.playlist };
          }
          return playlist;
        });
        setPlaylist(updatedPlayList);
        Toast({
          type: "success",
          msg: `Video added to ${playlist[0].title.playlistName} playlist`,
        });
        toggle();
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function removeFromPlaylist(playlistId, videoId, setPlaylist) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId}/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setPlaylist((prev) =>
          prev.map((playlist) =>
            playlist._id === response.data.playlist._id
              ? response.data.playlist
              : playlist
          )
        );
        Toast({
          type: "info",
          msg: `Video removed from ${playlist[0].title.playlistName}`,
        });
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  const value = {
    toggleModal,
    display,
    setDisplay,
    playlist,
    setPlaylist,
    addPlaylists,
    removePlaylist,
    getPlaylist,
    getPlaylists,
    removeFromPlaylist,
    addToPlaylist,
  };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistProvider, usePlaylistContext };
