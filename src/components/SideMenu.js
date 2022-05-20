import React from 'react'
import { FaHome, FaHistory } from 'react-icons/fa';
import { useVideoListing } from '../context/videoListingContext'
import { AiFillLike } from 'react-icons/ai';
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
function SideMenu() {
    const { videoList } = useVideoListing()   
return (
    <div class="main-hero-section">
        <div class="side-menu-cotainer">
            <ul className='aside-list-icons'>
                <li className='icons-bar'>  <NavLink to='/'><FaHome className='icon-md' /></NavLink><span className="aside-text">Home</span></li>
                <li className='icons-bar'>  <NavLink to='/videoListing'>< MdExplore  className='icon-md' /></NavLink><span className="aside-text">Explore</span></li>
                <li className='icons-bar'><NavLink to='/historyPage'><FaHistory className='icon-md' /></NavLink><span className="aside-text">Hisory</span></li>
                <li className='icons-bar'>  <NavLink to ='/likeVideo'><AiFillLike className='icon-md'/></NavLink><span className="aside-text">Like-Video</span></li>
                <li className='icons-bar'>  <NavLink to='/'><MdPlaylistPlay className='icon-md' /></NavLink><span className="aside-text">Play-List</span></li>
                <li className='icons-bar'>  <NavLink to = '/watchLater'><MdOutlineWatchLater className='icon-md'/></NavLink><span className="aside-text">Watch-Later</span></li>
                
            </ul>
        </div>
        </div>
)
}

export default SideMenu