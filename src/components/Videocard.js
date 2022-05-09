import React from 'react'
function Card({ _id,
    title,
    creator,
    creater_img,
    thumbnailUrl,
    videos,
    description,
    video_id,
    old,
    duration,
    views,}) {
  
  console.log(_id)
    return (
      <>
          <div class="Card-main-wrapper" >
        
            <div class="card-main-container">
            <img class="card-image-md" src=   {thumbnailUrl}/> 
            <div class="card-discription-md">{title}</div> 
              <div class="card-likes-views-md">
                  <div>
                  {views}
                  </div>
                  <div>
                  345K likes
              </div>
              
            </div  >
            <div className='chennel-container' ><img className='chennel-logo-img' src={creater_img} ></img> <div>{ creator}</div></div>
           

            </div>

        </div>
        </>
  )
}

export default Card