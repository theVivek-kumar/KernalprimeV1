
import SideMenu from "../components/SideMenu";
import Navbar from "../components/navbar";
import { useHistoryContext } from '../context/Historycontext'
import CardHorizontal from "../components/CardHorizontal";


function HistoryPage() {
  const { history, setHistory, getHistory,
        addToHistory,
        removeFromHistory,
        clearHistory,
       } = useHistoryContext();
  console.log(history,"this is from history page")
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
              Watch History {history.length}
            </div>
            <div>
              <button onClick={clearHistory} className="btn btn-primary">
                Clear All
              </button>
            </div>
          </h3>
            <div className='Video-listing'>
                
             {history.map((video) => (
                        <CardHorizontal removeFunction={()=>{removeFromHistory(video._id,setHistory)}} key={video._id} title={video.title}
                            creator=
                            {video.creator}
                            _id={video._id}
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

export  default  HistoryPage ;
