import React from 'react'
import CardHorizontal from '../components/CardHorizontal';
import Navbar from '../components/navbar'
import SideMenu from '../components/SideMenu'
import { useWatchLaterContext } from '../context/Watch-later'
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater } from 'react-icons/md';

function WatchLaterpage() {
  const { setWatchLater,
    watchLater,
    addToWatchLater,
    removeFromWatchLater } = useWatchLaterContext();
    return (
      <>
        <Navbar />
        <div className='main-section-wrapper'>
          <SideMenu />
          <div class="hero-section-wrapper">
             <section className="cards">
          <h3 className="main-section-heading">
                <div className="main-section-heading-center">
                  <MdOutlineWatchLater/>
              Watch Later {watchLater.length}
                </div>
                </h3>
              <div className='Video-listing'>
                {
                    watchLater.map((video) => (
                        <CardHorizontal removeFunction={()=>{removeFromWatchLater(video._id, setWatchLater)}} key={video._id} title={video.title}
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
              </section>



          </div>          
          </div>
        
            </>
  )
}

export default WatchLaterpage