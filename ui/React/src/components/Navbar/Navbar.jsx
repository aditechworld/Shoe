import React from 'react'
import './nav.css'
import boxicons from 'boxicons'
import { Link, Navigate } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
      <div className='brand'>
        <h3 className='logo'>Online Store</h3>
      </div>
      <div className='action nav'>
        <Link to='/cart'>
          <i class='fs-4 bx bxs-cart-add mx-3 btn btn-dark'></i>
        </Link>
      
        <button className='btn btn-warning' onClick={()=>{navigator("/")}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar