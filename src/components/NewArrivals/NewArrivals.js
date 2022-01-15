import React from 'react'

import Products from '../Products/Products'
import Brands from './Brands'
import Carousel from './Carousel'

const NewArrivals = () => {
    return (
        <div>
            <Products title='New Arrivals'/>
            <Carousel/>
            
           <Brands/>
        </div>
    )
}

export default NewArrivals
