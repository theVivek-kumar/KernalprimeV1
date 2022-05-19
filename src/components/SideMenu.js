import React from 'react'
import { FaHome, FaHistory } from 'react-icons/fa';
import { useVideoListing } from '../context/videoListingContext'
import { AiFillLike } from 'react-icons/ai';
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater,MdSlowMotionVideo } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
function SideMenu() {
    const { videoList } = useVideoListing()   
return (
    <div class="main-hero-section">
        <div class="side-menu-cotainer">
            <ul className='aside-list-icons'>
                <NavLink to = '/'><li className='icons-bar'> <FaHome/></li></NavLink>
                <NavLink to='/videoListing'><li className='icons-bar'> <MdExplore/></li></NavLink>
                <li className='icons-bar'> <MdPlaylistPlay /> </li>
                <NavLink to='/watchLater'><li className='icons-bar'> <MdOutlineWatchLater /> </li></NavLink>
                <NavLink to ='/historyPage'><li className='icons-bar'> <FaHistory/> </li></NavLink>
                <NavLink to="/LikeVideo"> <li className='icons-bar'> <AiFillLike /> </li></NavLink>
                <li className='icons-bar'> <MdSlowMotionVideo/> </li>
            </ul>
        </div>
        </div>
)
}

export default SideMenu