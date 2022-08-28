import React from 'react'
import { useNavigate } from "react-router-dom";
import './Header.css'

function Header() {
  const navigate = useNavigate();
  return (
    <div className='navbar-layout'>
      <div className='navbar-container'>
          <img onClick={() => navigate('/')} style={{cursor:"pointer"}} src='assets/Logo.svg' alt='logo'/>
          <div className='navbar-rightmost'>
            <button onClick={() => navigate('/login')} className='no-bg-btn'>Login</button>
            <button className='bg-btn'>Register</button>
          </div>
      </div>
    </div>
  )
}

export default Header