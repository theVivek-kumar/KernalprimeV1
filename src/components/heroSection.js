import React from 'react'

function HeroSection() {
    return (
        <div className='hero-section-container'>
            <div className='heroSsection-side-text'>
                <div className='heading-top'>The Best Place To <span style={{ color: "#1d9bf0" }}>Learn</span></div>
                <div>Watch live Node and react class
                </div>
                <div ><button className='btn-watchnow'>watch more</button></div>
            </div>
            <div className="hero-img"><img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" className="hero-img-head"
                alt="img"></img>
            </div>
        </div> 
)}

export default HeroSection