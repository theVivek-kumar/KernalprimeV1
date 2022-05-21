import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { usePlaylistContext } from "../context/PlayListContext";
import Toast from './ToastComp';


function PlayModel({ video }) {
  const [playlistName, setplaylistName] = useState("");

  const {
    toggleModal,
    display,
    setDisplay,
    playlist,
    setPlaylist,
    addPlaylists,
    removeFromPlaylist,
    addToPlaylist,
  } = usePlaylistContext();
  return (
    <div style={{ display: display }} className="modal--container">
      <div id="myModal" className="modal">
        <div className="modal-content">
          <MdClose onClick={toggleModal} className="close"></MdClose>

          <div className="modal-body">
            <p className="modal-title">Add to Playlist</p>
            <div className="divider"></div>

            {playlist?.map((playlist) => {
              return (
                <div className="checkbox-input"
                onClick={()=>addToPlaylist(
                            video,
                            playlist._id,
                            setPlaylist,
                            toggleModal
                          )}
                key={playlist._id}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      e.target.checked
                        ? addToPlaylist(
                            video,
                            playlist._id,
                            setPlaylist,
                            toggleModal
                          )
                        : removeFromPlaylist(
                            playlist._id,
                            video._id,
                            setPlaylist
                          )
                    }
                    name="check"
                    className="checkbox"
                  />
                  <div className="playlist-name">
                    {playlist.title.playlistName}
                  </div>
                </div>
              );
            })}

            <div className="divider"></div>
            <p className="modal-title"> + Create new playlist</p>
            <label htmlFor="playlistname" className="label">
              PLAYLIST NAME
            </label>
            <input
              name="playlistname"
              onChange={(e) => setplaylistName(e.target.value)}
              value={playlistName}
              className="input"
              placeholder="Please Enter Playlist"
            ></input>

            <div className="modal--btn">
              <button
                onClick={() => {
                  playlistName.length > 0
                    ? playlist.find(
                        (playlist) =>
                          playlist.title.playlistName == playlistName
                      )
                      ? Toast({
                          type: "error",
                          msg: `Playlist ${playlistName} already exists`,
                        })
                      : addPlaylists(playlistName, setPlaylist)
                    : Toast({
                        type: "error",
                        msg: "Please enter playlist name",
                      });
                  setplaylistName("");
                }}
                className="btn-modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayModel ;