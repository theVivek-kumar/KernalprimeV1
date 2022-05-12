import React from 'react'
// import { useParams } from "react-router-dom";
// import {useVideoListing} from "../context/videoListingContext"

function MainArea() {
//      const { videoId } = useParams();

//   const { videoList } = useVideoListing();

//   const filteredVideo = videoList.filter((video) => video._id === videoId);

//   const {
//     _id,
//     old,
//     views,
//     title,
//     creator,
//     duration,
//     video_id,
//     creater_img,
//     description,
//     thumbnailUrl,
// } = filteredVideo[0];

// const videourl = `https://www.youtube.com/embed/${video_id}`;
  return (
      <div className='main-content-wrapper-singleVideo'>
           <div class="Card-main-wrapper singleVieo" >
        
            <div class="card-main-container ">
            <img class="card-image-md singleVideo" src=  "https://i.ytimg.com/vi/NZoRlVi3MjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT9TW4hKIsUbqac4BUD2ReDmSVCg"/> 
            <div class="card-discription-md">the react webdite</div> 
              <div class="card-likes-views-md">
                  <div>
                  47,486,5
                  </div>
                  <div>
                  345K likes
              </div>
              
            </div  >
            {/* <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div></div> */}
           

            </div>

        </div>
          
    </div>
  )
}

export default MainArea