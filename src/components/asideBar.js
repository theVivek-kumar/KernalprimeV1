import React from 'react'
import { FaBars ,FaHome,FaHistory} from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater,MdSlowMotionVideo } from 'react-icons/md';
import Card from './Videocard';
import CategoryCard from './categorisCard';
import VideoListing from '../page/videoListing';
import  HeroSection from'../components/heroSection'
import CardFeature from './featureCard';
import SideMenu from './SideMenu';
function AsideBar() {
    return (
    <div class="main-hero-section">
                <SideMenu/>
                <div class="hero-section-wrapper">
                <HeroSection/>
                <div>
                <CategoryCard/>
                </div>
                <div className='card-section'>
                <CardFeature/>
                </div>
                </div>
                
            
        </div>
    
    

)
}

export default AsideBar