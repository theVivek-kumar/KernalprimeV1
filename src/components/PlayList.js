import React from "react";
import { AiOutlineCloseCircle,AiOutlinePlus } from "react-icons/ai";
function PlayList() {
  return (
    <div className="playList-container">
      <div className="playList-container-setion1">
        <div>Save To..</div>
        <AiOutlineCloseCircle />
        <div></div>
      </div>
      <div className="playList-container-main-container">
         <div className="seperation-line-playlist">
                </div >
        <div>ecom dev</div>
        <div>ecom dev</div>
        <div className="seperation-line-playlist"></div>
        <div className="creatre-new-palylist">
          <AiOutlinePlus  className="playlist-icon"/>
          Create New PlayList
        
        </div>
       
          </div>
          <button>Create..</button>
    </div>
  );
}

export default PlayList;
