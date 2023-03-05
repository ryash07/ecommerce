import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import "./Categories.scss"


const Categories = () => {
    const targetRef = useRef(null)
  return (
    <div className='categories' ref={targetRef}>
        <div className="col">
            <div className="row">
                <img src='/img/menssection.jpg' alt=""></img>
                <button>
                    <Link to="/products/2" className='link'>Men</Link>
                </button>
            </div>
            <div className="row">
            <img src='/img/womenssection.jpg' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src='/img/childrenssection.jpg' alt=""></img>
                <button>
                    <Link to="/products/3" className='link'>Children</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src='/img/footwearsection.jpg' alt=""></img>
                <button>
                    <Link to="/products/4" className='link'>Footwears</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src='/img/watchessection.jpg' alt=""></img>
                <button>
                    <Link to="/products/6" className='link'>Watches</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src='/img/accessoriessection.jpg' alt=""></img>
                <button>
                    <Link to="/products/5" className='link'>Accessories</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories
