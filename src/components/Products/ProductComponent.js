import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa';
import './ProductComponent.css';

const ProductComponent = ({children,promotion}) => {
    return (
        <div>
            <div className="bagcontainer">
                {promotion && <div className='promotion'>{promotion}%off</div>}
                <FaHeart className='heart'/>
                <div>
                <FaShoppingBag className='bag'/>
                </div>
                
            </div>
            <p >Sample Products with long name</p>
            <p className='price no-margin'>54,000 ks</p>
            {children}
        </div>
    )
}

export default ProductComponent
