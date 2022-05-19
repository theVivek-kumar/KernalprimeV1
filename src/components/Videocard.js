import React from "react";
import { useNavigate } from "react-router-dom";
import { useHistoryContext } from "../context/Historycontext";
import { AiFillLike,AiFillDislike } from 'react-icons/ai';
import { MdPlaylistPlay, MdOutlineWatchLater } from 'react-icons/md';
import {useWatchLaterContext} from '../context/Watch-later'
import { UseLikeVideoContext } from "../context/LikeVideoContext";
function Card({
  _id,
  title,
  creator,
  creater_img,
  thumbnailUrl,
  videos,
  description,
  video_id,
  old,
  duration,
  views,
}) {
  console.log(_id);
  const navigate = useNavigate();
  const { addToHistory, setHistory } = useHistoryContext();
    const { setWatchLater,
    watchLater,
    addToWatchLater,
    removeFromWatchLater } = useWatchLaterContext();
    const { addToLikeVideo,setLikeVideo } = UseLikeVideoContext();
  return (
    <>
      <div class="Card-main-wrapper">
        <div class="card-main-container">
          <img
            onClick={() => {
              addToHistory(videos, setHistory);
              navigate(`/singleVideoPage/${_id}`);
            }}
            class="card-image-md"
            src={thumbnailUrl}
          />
          <span className="duration-label">{duration} </span>
           <div className="single-video-icons">
                <AiFillLike onClick={()=>{addToLikeVideo(videos, setLikeVideo)}} />
                <AiFillDislike />
                <MdPlaylistPlay />
            <MdOutlineWatchLater onClick={() => {addToWatchLater(videos, setWatchLater) 
            
                }}/>
              </div>
          <div class="card-discription-md">{title}</div>
          <div class="card-likes-views-md">
            <div>{views}</div>
            <div>345k likes</div>
          </div>
          
          <div className="chennel-container">
            <img className="chennel-logo-img" src={creater_img}></img>
            <div>{creator}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
