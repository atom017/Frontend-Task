import React from 'react'
import CategoryComponent from './CategoryComponent'
import MoreCategory from './MoreCategory'
import './Categories.css';

const Categories = () => {
    return (
        <div className='wrapper'>
            <h1 className='category-title'>Categories</h1>
            <div className="categories">
                <CategoryComponent/>
                <CategoryComponent/>
                <CategoryComponent/>
                <CategoryComponent/>
                <CategoryComponent/>
                <CategoryComponent/>
                <CategoryComponent/>
                <MoreCategory/>
            </div>
           
        </div>
    )
}

export default Categories
