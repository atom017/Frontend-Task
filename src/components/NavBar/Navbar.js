import React, { useState } from 'react';
import {FaBars, FaSearch,FaTimes} from 'react-icons/fa';

import './navbar.css';
import asset33 from '../../assets/WebBanner/NavBarIcons/Asset 33.svg';
import asset34 from '../../assets/WebBanner/NavBarIcons/Asset 34.svg';
import asset35 from '../../assets/WebBanner/NavBarIcons/Asset 35.svg';
import asset36 from '../../assets/WebBanner/NavBarIcons/Asset 36.svg';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className='wrapper'>
            <nav className="nav-bar">
                <div className="search-container">
                    <input type="text" placeholder='search' className='search-term'/>
                    <a href="#" className='search-btn'><FaSearch className='search-icon'/></a>
                </div>
                
                <button className="nav-toggle" 
                        onClick={() => setIsOpen(!isOpen)}>
                            {isOpen?<FaBars/>:<FaTimes/>}
                </button>
                <div className={isOpen?'nav-items':'nav-items responsive'}>
                    <div className="currency-container">
                        <select name="currency" id="currency">
                            <option value="kyat">ks</option>
                            <option value="dollar">$</option>
                        </select>
                        
                    </div>
                    
                    <ul className='nav-links'>
                        <li>
                            <a href="#" className='navicon-container'>
                             <img src={asset33} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='navicon-container'>
                             <img src={asset34} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='navicon-container'>
                             <img src={asset35} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='navicon-container'>
                             <img src={asset36} alt="" />
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </nav>   
        </div>
    )
}

export default Navbar
