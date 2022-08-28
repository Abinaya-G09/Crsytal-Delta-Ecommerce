import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Item.css'

function Item() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  let item = []
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        {
          url: `http://localhost:9000/product/${id}`,
          method: 'get'
        }
      );
      setData((old) => [...old, ...result.data]);
    };
    fetchData();
  }, [])
  
  data.forEach(e => {
    item.push(
      <div className='item-page'>
        <div>
          <a href="/product"><img src='/assets/chevron_left.svg' alt='back'/>Back to product page</a>
        </div>
        <div className='item-image'>
          <img src={e.image_url} alt='item' className='product-item-image'/>
        </div>
        <div className='item-desc'>
          <h1>Product detail</h1>
          <p className='item-title'>{e.name}</p>
          <p className='verify'><img src='/assets/done.svg' /> Verified User</p>
          <p className='item-price'>{e.price}</p>
          <h3>shipping to:</h3>
          <p className='user-address'>123, Akshaya Nagar 1st Block 1st Cross, <br /> Rammurthy nagar, <br /> Banglore - 560016</p>
          <button className='btn-bg'>Place your order</button>
        </div>
      </div>
    )
  })

  return (
    <div className='item-layout'>
      <Navbar />
      <div>{item}</div>
    </div>
  )
}

export default Item