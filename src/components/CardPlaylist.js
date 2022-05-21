import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdExplore,MdPlaylistPlay  } from 'react-icons/md';
function CardPlaylist({ playlist }) {
     const {
    title: { playlistName },
    _id,
    videos,
  } = playlist;

  const img =
    videos.length > 0
      ? videos[0].thumbnailUrl
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAEnJTxA7e34jaxjxX7G1zosC_ORRAu45Mw&usqp=CAU";

  const navigate = useNavigate();


  return (
        <div className="card">
      <div className="card--image">
        <div className="card-overlay">
          <p>{videos.length}</p>
          <MdPlaylistPlay />
        </div>
        <img
          onClick={() => {
            navigate(`/playListSingle/${_id}`);
          }}
          src={img}
          className="img-fluid"
          alt={playlistName}
        />
      </div>

      <div className="card--body">
        <div className="card--details">
          <h4 className="card--title">{playlistName}</h4>
        </div>
      </div>
    </div>
  )
}

export default CardPlaylist