import React from 'react'
import { usePlaylistContext } from '../context/PlayListContext'
import { useParams } from "react-router-dom";
import CardHorizontal from '../components/CardHorizontal';
import Navbar from '../components/navbar';
import SideMenu from '../components/SideMenu';
import { MdPlaylistPlay  } from 'react-icons/md';



function PlayListSingle() {
const { playlistId } = useParams();
const { playlist, setPlaylist, removeFromPlaylist, removePlaylist } =
        usePlaylistContext();
    const filterPlaylist = playlist.filter(
        (playlist) => playlist._id === playlistId
    );
    const VideoInPlayList = filterPlaylist[0].videos;
    console.log(VideoInPlayList)
    
    const {
    title: { playlistName ,},
    _id,
    videos,
    } = filterPlaylist[0];
    console.log(filterPlaylist[0])
    return (
        <>
            <Navbar />
            <div className='main-section-wrapper'>
                <SideMenu />
                <div class="hero-section-wrapper">
                    <section className="cards">
                        <h3 className="main-section-heading">
                            <div className="main-section-heading-center">
                            <MdPlaylistPlay />
                                {filterPlaylist[0].title.playlistName}
                                {VideoInPlayList.length}
                            </div>
                            </h3>
                            <div className='Video-listing'>
                            {VideoInPlayList?.map((video) => (
                            <CardHorizontal
                            key={video._id}
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
    );
}

export default PlayListSingle;