import React from 'react'
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home() {
  const navigate = useNavigate();
  return (
    <div className='homepage-container'>
      <div className='main-page'>
        <img src='assets/banner - bg.svg' />
        <div className='home-absolute'>
          <div className='home-banner-title'>
            <p><span className='orange'>BUY</span> the <span className='blue'>Product</span> for you!</p><br />
            <p><span className='orange'>SELL</span> your <span className='blue'>Product!</span></p>
          </div>
          <div className='home-banner-description'>
            <p>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry.</p>
            <button onClick={() => navigate('/product')} className='bg-btn'>Explore Products</button>
          </div>
        </div>
        <img src='assets/banner - product.svg' className='absolute-img'/>
        <img src='assets/banner - bg -blue.svg' />
      </div>
    </div>
  )
}

export default Home