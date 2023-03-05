import React from 'react'
import "./Footer.scss"
import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <Link to="/products/1"><span>Women</span></Link>
                <Link to="/products/2"><span>Men</span></Link>
                <Link to="/products/3"><span>Children</span></Link>
                <Link to="/products/4"><span>Footwears</span></Link>
                <Link to="/products/5"><span>Accessories</span></Link>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>Urban Essentials Co. is an online destination for all your modern lifestyle needs.
                an ecommerce website that specializes in selling essential products and goods
                    
                </span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>Email - ryash4170@gmail.com 
                    write us a query and we will reach you as soon as possible ad resolve your issues
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">URBAN ESSENTIALS CO.</span>
                <span className="copyright">Created By-YashRajSen | © 2023 All RIGHTS RESERVED</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}
