import React, { useState } from 'react'
import { videos } from '../backend/db/videos'


function Chip( {
  _id,
    title,
    creator,
    creater_img,
    thumbnailUrl,
    videos,
    description,
    video_id,
    old,
    category,
  views, }) {
  const [chip, setChip] = useState(category)
  const filterResult = (catItems) => {
    const result = category.filter((curData) => {
      return curData.category === catItems;
    })
    setChip(result)
    console.log(result)
  }
  return (
    <div>
      <div class="chip-section-wrapper">
        <button className="btn-1" onClick={() => filterResult('React')}>React</button>
        <button className="btn-1">Node js</button>
        <button className="btn-1">CSS3</button>
        <button className="btn-1">JavaScript</button>
        <button className="btn-1">HTML5</button>
        <button className="btn-1">BootStrap</button>
        <button className="btn-1">NeogCamp</button>
      </div>
    </div>
  );
}


export default Chip;
