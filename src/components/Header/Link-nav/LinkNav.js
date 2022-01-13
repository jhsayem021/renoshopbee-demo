import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LinkNav.css'
import useCart from './../../../hooks/useCart';
    

const LinkNav = (props) => {
    
    return (
        <div className="navbar">
            <div className="nav-logo">
                <h1>RENOSHOP<span>BEE</span></h1>
            </div>
            <ul className="nav-link">
                <li><Link to="home">HOME</Link></li>
                <li><Link to="">WOMEN</Link></li>
                <li><Link to="">MEN</Link></li>
                <li><Link to="">KIDS</Link></li>
                <li><Link to="">JEWELLERY</Link></li>
                <li><Link to="">ACCESSORIES</Link></li>
                
            </ul>
            <div className="nav-link-end" >
                <Link to="cart" className="cart"><i className="fas fa-shopping-cart"></i> <p>{props.cart.length}</p></Link>
                <Link to="" className="cart"><i className="fas fa-search"></i></Link>
                <Link to="" className="cart"><i className="fas fa-bars"></i></Link>
            </div>
        </div>
    );
};

export default LinkNav;