import React from 'react'
import { useParams } from "react-router-dom";
import {useVideoListing} from "../context/videoListingContext"

function MainArea() {
  const { videoId } = useParams();
  const { videoList } = useVideoListing();
  const filteredVideo = videoList.filter((video) => video._id === videoId);
  // const {video} = undefined || {};
  const {
   _id ,
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
  console.log(videoList ,"videolist")

const videourl = `https://www.youtube.com/embed/${video_id}`;
  return (
      <div className='main-content-wrapper-singleVideo'>
           <div class="Card-main-wrapper singleVieo" >
        
        <div class="card-main-container ">
         <iframe width="900" height="520"  src={videourl} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
            <div class="card-discription-md">{title}</div> 
              <div class="card-likes-views-md">
                  <div>
                {views}

                
              </div>
             
              <div>
               345k likes
              
            </div>
           
              
            </div  >
            <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
            <div>{description }</div>

            </div>

        </div>
          
    </div>
  )
}

export default MainArea