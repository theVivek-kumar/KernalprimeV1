import { MdPlaylistPlay } from "react-icons/md";
import CardPlaylist from "../components/CardPlaylist";
import Navbar from "../components/navbar";
import SideMenu from "../components/SideMenu";
import { usePlaylistContext } from "../context/PlayListContext";

function PlaylistPage() {
  const { playlist, setPlaylist,removeFromPlaylist } = usePlaylistContext();

  return (
    <div>
        <div className="body-section">
            <Navbar />
            <div className='main-section-wrapper'>
            <SideMenu />
            <div class="hero-section-wrapper">
        <section className="cards">
        <h3 className="main-section-heading">
            <div className="main-section-heading-center">
            <MdPlaylistPlay />
            All Playlists ({playlist.length})
            </div>
            <div>
            {/* <button
                onClick={removeFromPlaylist}
                className="btn-btn-primary"
            >
                Clear All
            </button> */}
            </div>
        </h3>
        <div className= 'Video-listing'>
            {playlist?.map((video) => (
            <CardPlaylist
                key={video._id}
                playlist={video}
                removeFunction={() => {}}
            />
            ))}
        </div>
                    </section>
                    </div>
            </div>
    </div>
    </div>
);
}

export default PlaylistPage;
