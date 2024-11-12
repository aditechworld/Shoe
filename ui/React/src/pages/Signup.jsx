import React from 'react'
import InputGroup from '../components/form/InputGroup'
import shoe from '../assets/shoe.svg'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div className='page center'>
      <div className='brand'>
        
        <h1 className='text-gradient fs-1'>Online <img width='50' src={shoe} alt='brand'/> Shop</h1>
      </div>
      
      <div className='card p-4 col-4 mt-3'>
        <h4>Create New Account</h4>
        <div className='px-3'>
        <InputGroup name='Username' id={'username'} placeholder='Enter Username' label={<i class='bx bxs-user-rectangle'></i>}/>
        <InputGroup name='Email' id={'email'} placeholder='Enter Email' label={<i class='bx bx-envelope'></i>}/>
        <InputGroup name='Password' id={'password'} placeholder='Enter Password' label={<i class='bx bxs-lock'></i>}/>
        
        </div>
      <button className='btn btn-warning mt-3 mb-3'> Create Account </button>
      <Link to='/'> Already Signed Up?</Link>
      </div>
    </div>
  )
}

export default Signup