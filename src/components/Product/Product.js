import React from 'react';
import './Product.css'
const Product = (props) => {
   const {image,title,price} = props.product;
    return (
            <div className="product-details">
                    <div className="product-image ">
                        <img className="image" src={image} alt="" />
                        <div className="product-image-icon">
                            <div onClick={() => props.handleAddToCart(props.product)} ><i className="fas fa-shopping-cart icon-image"></i></div>
                            <div><i className="far fa-heart icon-image"></i></div>
                            <div><i className="fas fa-retweet icon-image"></i></div>
                        </div>
                    </div>

                    <h5>{title}</h5>
                    <h3>$<span id="price">{price}</span></h3>
                    <div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
            </div>
    );
};

export default Product;