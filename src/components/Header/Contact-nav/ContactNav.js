import React from 'react';
import './ContactNav.css';


const ContactNav = () => (
    <div className="contact">
        <div className="phone-mail">       
            <div className="phone"> <i className="fas fa-phone-alt"></i> <a href="">+880-1601-215-000</a></div>
            <div className="mail"> <i className="fas fa-envelope"></i> <a href="">info@company.com</a></div> 
        </div>
        <div className="social-link">
            <div><a  href=""></a><i className="fab fa-facebook-f"></i></div>
            <div><a  href=""></a><i className="fab fa-twitter"></i></div>
            <div><a  href=""></a><i className="fab fa-instagram-square"></i></div>
            <div><a  href=""></a><i className="fab fa-linkedin-in"></i></div>
        </div>
    </div>
);

export default ContactNav;