import React from 'react'
import InputGroup from '../components/form/InputGroup'
import shoe from '../assets/shoe.svg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='page center'>
      <div className='brand'>
        
        <h1 className='text-gradient fs-1'>Online <img width='50' src={shoe} alt='brand'/> Shop</h1>
      </div>
      
      <div className='card p-4 col-4 mt-3'>
        <h4>Login</h4>
        <div className='px-3'>
        <InputGroup name='Email' id={'email'} placeholder='Enter Email' label={<i class='bx bx-envelope'></i>}/>
        <InputGroup name='Password' id={'password'} placeholder='Enter Password' label={<i class='bx bxs-lock'></i>}/>
        
        </div>
      <button className='btn btn-warning mt-3 mb-3'> Sign In </button>
      <Link to='/signup'>Don't Have An Account?</Link>
      </div>
    </div>
  )
}

export default Login