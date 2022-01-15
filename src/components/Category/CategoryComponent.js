import React from 'react';
import CategoryIcon from '../../assets/Category icons/Asset 42.png';
import './CategoryComponent.css';

const CategoryComponent = () => {
    return (
        <div className='category-wrapper'>
            <div className="category-img">
            <img src={CategoryIcon} alt="" />
            </div>
            
            <p className='small-text no-margin'>Sample</p>
            <p className='small-text no-margin'>Category</p>
        </div>
    )
}

export default CategoryComponent
