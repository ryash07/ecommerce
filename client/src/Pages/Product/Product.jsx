import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {
  const id = useParams().id
  const [selectedImg,setSelectedImg] = useState("img")
  const [quantity,setQuantity] = useState(1)
  
  const dispatch = useDispatch()

  const {data,loading,error} = useFetch(`/products/${id}?populate=*`)

  const increment = () =>{

    setQuantity(prev=>prev+1)
  }

  const decrement = () =>{
    if(quantity === 1){
      setQuantity(1)
    }else{
      setQuantity(prev=>prev-1)
    }

  }
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt=""  onClick={(e)=>setSelectedImg("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedImg("img2")}/>
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>
          {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
          <button className="add" onClick={()=> dispatch(addToCart({
            id:data.id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            price:data.attributes.price,
            img:process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url,
            quantity,
          }))}>
          <AddShoppingCartIcon /> ADD TO CART
          </button>
          
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISHLIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor Polo</span>
            <span>Product Type</span>
            <span>Tag: T-shirt, Women ,Top</span>
          </div>
          <hr />
          <div className="info">
            <span>Description</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        
      </div>
    </div>
  )
}
