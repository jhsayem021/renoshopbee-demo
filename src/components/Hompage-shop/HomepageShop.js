import React, { useEffect, useState } from 'react';
import './HompageShop.css';
import Banner from './../Header/Banner/Banner';
import Product from './../Product/Product';
import Features from '../Features/Features';

const HomepageShop = (props) => {

    const {products,handleAddToCart} = props;
    const [Fproducts,setFproducts] = useState([]);
    
    useEffect(()=>{
        fetch('./FeaturedProduct.json')
        .then(res => res.json())
        .then(data=>setFproducts(data))
    },[])
    return (
        <div>
            
            
            <Banner></Banner>
            <div className="seller-section">
                <div className="seller-title">
                    <h3>BEST SELLERS</h3>
                    <p><i><small>The product from us</small></i></p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, minima laborum. Temporibus nam, veritatis, ducimus labore,?</p>
                </div>
                {
                    
                    products.map(product =><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product> )
                
                }               
            </div>
            <Features></Features>
            <div className="feature-sec" >
                <div className="text-features">
                    <h3>FEATURED PRODUCTS</h3>
                    <p><small><i>Newest trends from top Brands</i></small></p>
                </div>
                <div className="featured-product">
                {
                    
                    Fproducts.map(product =><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product> )
                
                }                 
                </div>
            </div>
        </div>
    );
};

export default HomepageShop;