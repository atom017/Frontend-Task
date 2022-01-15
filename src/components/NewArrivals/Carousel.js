import React, { useState } from 'react'
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa'

import car1 from '../../assets/photos/car1.jpg'
import car2 from '../../assets/photos/car2.jpg'
import car3 from '../../assets/photos/car3.jpg'
import './Carousel.css'

const Carousel = () => {
   
    return (
        <div className='carousel wrapper'>
             <button className='prev-btn' >
            <FaChevronLeft/>
            </button>
            <div className="carImg-container">
                <img src={car1} alt="" />
            </div>
            <div className="carImg-container">
                <img src={car2} alt="" />
            </div>
            <div className="carImg-container">
                <img src={car3} alt="" />
            </div>
            <button className='next-btn'>
            <FaChevronRight/>
            </button>
        </div>
    )
}

export default Carousel
