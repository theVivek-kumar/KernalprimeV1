import React from 'react'
import { useParams } from "react-router-dom";
import { useVideoListing} from "../context/videoListingContext"
import { AiFillLike,AiFillDislike } from 'react-icons/ai';
import { MdPlaylistPlay, MdOutlineWatchLater } from 'react-icons/md';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { usePlaylistContext } from '../context/PlayListContext'
import { UseLikeVideoContext } from '../context/LikeVideoContext'
import { useWatchLaterContext } from '../context/Watch-later'
import PlayModel from './PlayModel';

function MainArea() {
  
  const { videoId } = useParams();
  const { videoList } = useVideoListing();
  const { toggleModal,
    display,
    setDisplay,
    playlist,
    setPlaylist,
    addPlaylists,
    removePlaylist,
    getPlaylist,
    getPlaylists,
    removeFromPlaylist,
    addToPlaylist, } = usePlaylistContext();
  const filteredVideo = videoList.filter((video) => video._id === videoId);
  const {
  _id ,
    old,
    views,
    title,
    creator,
    duration,
    video_id,
    creater_img,
    description,
    thumbnailUrl,
  } = filteredVideo[0];
  console.log(videoList, "videolist")
  const { addToLikeVideo, setLikeVideo } = UseLikeVideoContext()
   const { setWatchLater,
    watchLater,
    addToWatchLater,
    removeFromWatchLater } = useWatchLaterContext();

const videourl = `https://www.youtube.com/embed/${video_id}`;
  return (
    <>
      <PlayModel video={filteredVideo[0]}/>
      <div className='main-content-wrapper-singleVideo'>
        <div class="Card-main-wrapper singleVieo" >
        
        <div class="card-main-container-singlevideo ">
        <iframe width="900" height="520"  src={videourl} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-discription-md">{title}</div> 
              <div className="single-video-card-container">
              <div class="card-likes-views-md">
                  <div>
                {views}  
              </div>
              <div>
              345k likes
              </div>
                </div>
              <div className="single-video-icons">
                <AiFillLike  onClick={() =>{
                      addToLikeVideo(filteredVideo[0], setLikeVideo)}}/>
                <MdPlaylistPlay onClick={toggleModal} />
                <MdOutlineWatchLater onClick={() => {addToWatchLater(filteredVideo, setWatchLater) 
            
                }}/>
              </div>
          </div  >
          <div className="seperation-line"></div> 
            <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
          <div className="description" >
            <div className ="description">
              <div className="seperation-line">
                </div >{description}</div></div>
              <div className="seperation-line">
                </div >
            <div className='single-video-comments-section'>
              <div className='comments-section'>536 comments<div>
                <RiBarChartHorizontalLine />  short by
              </div>
              </div>
            </div>
            <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>
              <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>  <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>  <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>  <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>  <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>  <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>  <div>
           <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div> </div>  
             <p className='comment-md'>You can also try turning off any adblockers you may have running. These sometimes interfere with comments and block them from loading.</p>
           
             <div className="single-video-icons">
                <AiFillLike />
                <AiFillDislike/>
                
              </div>
            </div>
            </div>
          
          
          
        </div>
       
        
      </div>
    
      </>
  )
}

export default MainArea