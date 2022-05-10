import React from 'react'
import MainArea from '../components/MainArea'
import Navbar from '../components/navbar'
import { useParams } from "react-router-dom";
import {useVideoListing} from "../context/videoListingContext"


function SingleVideoPage() {
    const { videoId } = useParams();

  const { videoList } = useVideoListing();

  const filteredVideo = videoList.filter((video) => video._id === videoId);

  const {
    _id,
    old,
    views,
    title,
    creator,
    duration,
    video_id,
    creater_img,
    description,
    thumbnailUrl,
  } = filteredVideo[0];

  const videourl = `https://www.youtube.com/embed/${video_id}`;
    return (
      <>
            <Navbar />
            <div><MainArea />
                 </div>
            
            </>
  )
}

export default SingleVideoPage