import React from 'react'
import { FaHome, FaHistory } from 'react-icons/fa';
import { useVideoListing } from '../context/videoListingContext'
import { AiFillLike } from 'react-icons/ai';
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater,MdSlowMotionVideo } from 'react-icons/md';
function SideMenu() {
    const { videoList } = useVideoListing() 
    console.log(videoList, "thi id jnjcdjd")
    
return (
    <div class="main-hero-section">
        <div class="side-menu-cotainer">
            <ul className='aside-list-icons'>
                <li className='icons-bar'> <FaHome/></li>
                <li className='icons-bar'> <MdExplore/></li>
                <li className='icons-bar'> <MdPlaylistPlay /> </li>
                <li className='icons-bar'> <MdOutlineWatchLater /> </li>
                <li className='icons-bar'> <FaHistory/> </li>
                <li className='icons-bar'> <AiFillLike /> </li>
                <li className='icons-bar'> <MdSlowMotionVideo/> </li>
            </ul>
        </div>
        </div>
)
}

export default SideMenu