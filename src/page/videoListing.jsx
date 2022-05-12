import React from 'react'
import Chip from '../components/chipComponent'
import Navbar from '../components/navbar'
import SideMenu from '../components/SideMenu'
import Card from '../components/Videocard'
import { useVideoListing } from '../context/videoListingContext'



function VideoListing() {
   const { videoList } = useVideoListing() 
  
  return (
      <>
      <Navbar />
      <div className='main-section-wrapper'>
        <SideMenu />
         <div class="hero-section-wrapper">
            <Chip />
            <div className='Video-listing'>
                {
                    videoList.map((video) => (
                        <Card key={video._id} title={video.title}
                            creator=
                            {video.creator}
                            creater_img={video.creater_img}
                            thumbnailUrl={video.thumbnailUrl}
                            category={video.category}
                            videoUrl={video.videoUrl}
                            views={video.views}
                            isLiked={video.isLiked}
                            watchLater={video.watchLater}
                            video_id={video.video_id}
                            />
        ))
        
                }
                </div>


        </div>
       </div>
         
     
      </>
  )
}

export default VideoListing 