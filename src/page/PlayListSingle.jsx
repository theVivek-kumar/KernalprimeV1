import React from 'react'
import { usePlaylistContext } from '../context/PlayListContext'
import { useParams } from "react-router-dom";
import CardHorizontal from '../components/CardHorizontal';
import Navbar from '../components/navbar';
import SideMenu from '../components/SideMenu';


function PlayListSingle() {
     const { playlistId } = useParams();
  const { playlist, setPlaylist, removeFromPlaylist, removePlaylist } =
        usePlaylistContext();
     const FilterPlaylist = playlist.filter(
         (playlist) => playlist._id === playlistId
         
    );
    const VideoInPlayList = FilterPlaylist[0].videos;
    
    const {
    title: { playlistName },
    _id,
    videos,
    } = FilterPlaylist[0];
    return (
      <>
             <Navbar />
        <div className='main-section-wrapper'>
          <SideMenu />
          <div class="hero-section-wrapper">
              <section className="cards">
          <h3 className="main-section-heading">
              <div className="main-section-heading-center">
                <AiFillLike/>
              {playlist} {VideoInPlayList.length}
            </div>
            
          </h3>
              <div className='Video-listing'>
            {VideoInPlayList?.map((video) => (
              <CardHorizontal
                key={video._id}
                video={video}
                removeFunction={() =>
                  removeFromPlaylist(_id, video._id, setPlaylist)
                }
              />
            ))}
            </div>
            </section>



          </div>          
          </div>
      </>
  )
}

export default PlayListSingle;