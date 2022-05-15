
import { AiOutlineHistory } from "react-icons/ai";
import SideMenu from "../components/SideMenu";
import Navbar from "../components/navbar";

function HistoryPage() {
  const { history, clearHistory } = useHistoryContext();

  return (
    <div>
          <div className="body-section">
            <Navbar/>
        <SideMenu />
        <section className="cards">
          <h3 className="main-section-heading">
            <div className="main-section-heading-center">
              <AiOutlineHistory />
              Watch History {history.length}
            </div>
            <div>
              <button onClick={clearHistory} className="btn btn-primary">
                Clear All
              </button>
            </div>
          </h3>
          <div className="card--container">
            {history?.map((video) => (
              <CardHorizontal key={video._id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { HistoryPage };
