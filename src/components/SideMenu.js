import React from 'react'
import { FaBars, FaHome, FaHistory } from 'react-icons/fa';
import { useVideoListing } from '../context/videoListingContext'
import Card from '../components/Videocard'
import { AiFillLike } from 'react-icons/ai';
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater,MdSlowMotionVideo } from 'react-icons/md';
import Chip from './chipComponent';
function SideMenu() {
    const { videoList } = useVideoListing() 
    console.log(videoList, "thi id jnjcdjd")
    // const { video } = videoList
return (
    <div class="main-hero-section">
        <div class="side-menu-cotainer">
            <ul className='aside-list-icons'>
                <li className='icons-bar'> <FaHome/> </li>
                <li className='icons-bar'> <MdExplore/></li>
                <li className='icons-bar'> <MdPlaylistPlay /> </li>
                <li className='icons-bar'> <MdOutlineWatchLater /> </li>
                <li className='icons-bar'> <FaHistory/> </li>
                <li className='icons-bar'> <AiFillLike /> </li>
                <li className='icons-bar'> <MdSlowMotionVideo/> </li>
            </ul>
        </div>
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
)
}

export default SideMenu