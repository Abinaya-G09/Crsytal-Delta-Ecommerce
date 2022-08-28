import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Product.css'

function Product() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  let card = []
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        {
          url: 'http://localhost:9000/product',
          method: 'get'
        }
      );
      setData((old) => [...old, ...result.data]);
    };
    fetchData();
  }, [])

  data.forEach((e,i) => {
    card.push(
      <div className='card' key={i}>
        <div className='top'>
          <img src={e.image_url} alt='product-img'/>
        </div>
        <div className='bottom'>
          <div style={{display:'flex',justifyContent: 'space-between'}}>
            <p className='product-title'>{e.name.slice(0, 20) + (e.name.length > 20 ? "..." : "")}</p>
            <img src='assets/favorite.svg' alt='heart'/>
          </div>
          <p className='product-price'>{e.price}</p>
          <p className='product-description'>Lorem ipsum is simply dummy text of the <br />printing and typesetting industry.</p>
          <button onClick={() => navigate(`/product/item/${i}`)} className='buy-product' style={{cursor:"pointer"}}>Buy the product</button>
        </div>
      </div>
    )
  })
  return (
    <div className='product-page'>
      <Navbar />
      <div className='product-layout'>
        {/* Product Navbar */}
        {/* <div className='product-navbar'>
          <p>All</p>
          <p>Car</p>
          <p>Furniture</p>
          <p>Motorcycle</p>
          <p>Mobile</p>
          <p>TV's</p>
          <p>Kitchen appliances</p>
          <p>Computers & Laptops</p>
          <p>Home appliances</p>
          <p>Games & Entertainments</p>
        </div> */}
        {/* Advertisement */}
        <div className='advertisement'>
          <div className='rotated-bg'></div>
          {/* <img src="assets/banner-bg-rotated.png" /> */}
          <div className='banner-title'>
            <p><span className='orange'>BUY</span> the <span className='blue'>Product</span> for you!</p><br />
            <p><span className='orange'>SELL</span> your <span className='blue'>Product!</span></p>
          </div>
          <img src='assets/banner - product.svg' className='adv-img'/>
        </div>
        {/* Recommendations */}
        <div className='recommendations'>
          <h1>New Recommendations</h1>
          <div className='container-1'>{card.slice(0,4)}</div>
        </div>
        <div className='featured'>
          <h1>Featured Products</h1>
          <div className='container-1'>{card.slice(4,6)}{card[2]}{card[3]}</div>
          <div className='container-1'>{card.slice(4,6)}{card[2]}{card[3]}</div>
        </div>
      </div>
    </div>
  )
}

export default Product