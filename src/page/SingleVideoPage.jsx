import React from 'react'
import CardHorizontal from '../components/CardHorizontal';
import MainArea from '../components/MainArea'
import Navbar from '../components/navbar'
import Card from '../components/Videocard'
import { useVideoListing } from '../context/videoListingContext';

function SingleVideoPage() {
     const { videoList } = useVideoListing() 
    return (
    <>
            <Navbar />
            <div className='single-video-pge-container'>
                <MainArea />
                <div className='video-aside-list'>
                {
                    videoList.map((video) => (
                        <Card key={video._id} title={video.title}
                            creator=
                            {video.creator}
                            videos={video}
                            _id={video._id}
                            description={video.description}
                            duration={video.duration}
                            creater_img={video.creater_img}
                            thumbnailUrl={video.thumbnailUrl}
                            category={video.category}
                            videoUrl={video.videoUrl}
                            views={video.views}
                            isLiked={video.isLiked}
                            watchLater={video.watchLater}
                            video_id={video.video_id} />
                    ))
                    }
                    </div>
           </div>
            
            
            
            </>
)
}

export default SingleVideoPage