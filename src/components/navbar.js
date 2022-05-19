import React from 'react'
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import {BiLogInCircle } from 'react-icons/bi';
function Navbar() {
return (
    <nav className="navbar">
        <div className="navbar-logo-maindiv-md">
                <div className="navbar-logo-title-container">
                <div className='navbar-Fabar'><FaBars/></div>      
                <h2 className="logo-heading">Web<span style={{color: "#1d9bf0"}}>Prime</span></h2>
                    </div>
                    <div className='Navbar-Search-section'>
                        <input className="input-lg" type="text" />
                        <button className='Navbar-Search-section'><FaSearch/></button>
                    </div>
            <div className="navbar-side-section">
            <div><FaUserCircle/></div> 
            <div><BiLogInCircle/></div>  
            </div>
        </div>
        
            </nav>
)
}

export default  Navbar