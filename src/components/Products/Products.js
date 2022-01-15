import React from 'react'
import ProductComponent from './ProductComponent'
import './Products.css';

const Products = (props) => {
    
    return (
        <section className='wrapper'>
            <div className="common-title">
                <div className="title">
                    {props.img && <div className="title-logo">
                        <img src={props.img} alt="" />
                    </div>}
                    
                    <h1>{props.title}</h1>
                </div>
                
                <a className='view-more' href='#'>View More</a>
            </div>
            
            <div className="common-container">
            <ProductComponent promotion={props.promotion} children={props.children}/>
            <ProductComponent promotion={props.promotion} children={props.children}/>
            <ProductComponent promotion={props.promotion} children={props.children}/>
            <ProductComponent promotion={props.promotion} children={props.children}/>
            <ProductComponent promotion={props.promotion} children={props.children}/>
            <ProductComponent promotion={props.promotion} children={props.children}/>
            </div>
        </section>
    )
}

export default Products
