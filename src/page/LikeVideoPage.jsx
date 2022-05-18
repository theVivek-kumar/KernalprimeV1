import React from 'react'
import Navbar from '../components/navbar'
import SideMenu from '../components/SideMenu'
import Card from '../components/Videocard'
import { UseLikeVideoContext } from '../context/LikeVideoContext'


function LikeVideoPage() {
    const { setLikeVideo, getLikeVideo, addToLikeVideo, removeFromLikeVideo, clearLikedVideos, likeVideo } = useWatchLaterContext();
    console.log(likeVideo,"this is lie video")
  return (
      <>
           <Navbar />
        <div className='main-section-wrapper'>
          <SideMenu />
          <div class="hero-section-wrapper">
              <div className="main-section-heading-center">
              Watch Later {likeVideo.length}
            </div>
              <div className='Video-listing'>
                {
                    likeVideo.map((video) => (
                        <Card key={video._id} title={video.title}
                            creator=
                            {video.creator}
                            _id={video._id}
                            videos={video}
                            description={video.description}
                            duration={video. duration}
                            creater_img={video.creater_img}
                            thumbnailUrl={video.thumbnailUrl}
                            category={video.category}
                            videoUrl={video.videoUrl}
                            views={video.views}
                            isLiked={video.isLiked}
                            watchLater={video.watchLater}
                            video_id={video.video_id}
                            old={video.old}
                            />
        ))
        
                }
                </div>



          </div>          
          </div>
      </>
  )
}

export default LikeVideoPage