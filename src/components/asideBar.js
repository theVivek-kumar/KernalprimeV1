import React from 'react'
import { FaBars ,FaHome,FaHistory} from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { MdExplore,MdPlaylistPlay ,MdOutlineWatchLater,MdSlowMotionVideo } from 'react-icons/md';
import Card from './Videocard';
import CategoryCard from './categorisCard';
function AsideBar() {
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
                <div className='hero-section-container'>
                <div className='heroSsection-side-text'>
                    <div>The Best Place To <span style={{color:"#1d9bf0",font:"8rem"}}>Learn</span></div>
                    <div>Watch live Node and react class
                    </div>
                    <div ><button className='btn-watchnow'>watch more</button></div>
                    </div>
                    <div className="hero-img"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a02af52b-2b04-4534-ad4e-f98688ceb85e/db4e1ip-ce5b9423-400d-4442-8dd8-a9f42717c6c9.png" className="hero-img-head"
                alt="img"></img>
                </div>
                </div> 
                <div>
                    <CategoryCard/>
                </div>
                 <div className='card-section'>
                    <Card />
                    <Card />
                    <Card />
                    <Card/>
                </div>
               
                </div>
                
            
        </div>
    
    

)
}

export default AsideBar