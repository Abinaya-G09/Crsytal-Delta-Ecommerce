import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='loginpage-container'>
      <div className='login-page'>
        <div className='left'>
          <img src='assets/banner - bg.svg' />
          <img src='assets/banner - product.svg' className='absolute-product'/>
        </div>
        <div className='right'>
          <label className='email'>Email</label>
          <input type="email" placeholder='example@gmail.com' />
          <label className='password'>Password</label>
          <input type='password' />
          <button className='login-btn'>Login</button>
          <a href="#" className='forgot-password'>Forgot password?</a>
        </div>
      </div>
    </div>
  )
}

export default Login