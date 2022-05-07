import React from 'react'

function HeroSection() {
    return (
        <div className='hero-section-container'>
            <div className='heroSsection-side-text'>
                <div>The Best Place To <span style={{ color: "#1d9bf0", font: "8rem" }}>Learn</span></div>
                <div>Watch live Node and react class
                </div>
                <div ><button className='btn-watchnow'>watch more</button></div>
            </div>
            <div className="hero-img"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a02af52b-2b04-4534-ad4e-f98688ceb85e/db4e1ip-ce5b9423-400d-4442-8dd8-a9f42717c6c9.png" className="hero-img-head"
                alt="img"></img>
            </div>
        </div> 
)}

export default HeroSection