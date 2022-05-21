import React from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useHistoryContext } from "../context/Historycontext";
import {useWatchLaterContext} from '../context/Watch-later'
function CardHorizontal({  _id,
title,
creator,
creater_img,
thumbnailUrl,
videos,
description,
video_id,
old,
removeFunction,
duration,
    views, }) {
    console.log(_id)
    const navigate = useNavigate();
    const { addToHistory, setHistory } = useHistoryContext();
    const { removeFromWatchLater,setWatchLater } = useWatchLaterContext();
    return (
        <>
            <div className='card-horizontal-container'>
                <div className='card-horizontal image-md'>
                    <img onClick={() => {
                addToHistory(videos, setHistory);
            navigate(`/singleVideoPage/${_id}`);
            }}className='image-md-1' src={thumbnailUrl} />

                </div>
                <div className='card-horizontal-titles' >
                    <div className='titles'>{title}</div>
                    <div className="chennel-container">
                    <img className="chennel-logo-img" src={creater_img}></img>
                    <div>{creator}</div>
          </div>  
                    <div>{views}</div>
                    <div>{description}</div>

                </div>
                <div className='close-btn'>
                    <AiOutlineCloseCircle onClick={removeFunction}/>
                   
                </div>
          
            </div>
        </>
    );
}

export default CardHorizontal