import React from 'react'
import CategoryCard from './categorisCard';
import  HeroSection from'../components/heroSection'
import CardFeature from './featureCard';
import SideMenu from './SideMenu';
function AsideBar() {
    return (
    <div class="main-hero-section">
                <SideMenu/>
                <div class="hero-section-wrapper">
                <HeroSection/>
                <div>
                <CategoryCard/>
                </div>
                <div className='card-section'>
                <CardFeature/>
                </div>
                </div>
                
            
        </div>
    
    

)
}

export default AsideBar