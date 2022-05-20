import React from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { SiDtube } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
function Navbar() {
return (
    <nav className="navbar">
        <div className="navbar-logo-maindiv-md">
                <div className="navbar-logo-title-container">
                <div ><NavLink to="/">
                <SiDtube className='navbar-Fabar'/></NavLink></div>      
                <h2 className="logo-heading">Web<span style={{color: "#1d9bf0"}}>Prime</span></h2>
                    </div>
                    <div className='Navbar-Search-section'>
                        <input className="input-lg-search" type="text" />
                        <button className='Navbar-Search-section'><FaSearch className='search-icon'/></button>
                    </div>
            <div className="navbar-side-section">
            <div><FaUserCircle/></div> 
            <div >< BiLogInCircle/></div>  
            </div>
        </div>
        
            </nav>
)
}

export default  Navbar