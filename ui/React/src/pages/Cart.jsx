import React from 'react'
import Card from '../components/card/Card'
import { Link } from 'react-router-dom'

function Cart() {
  function click(){
    console.log(`Clicked`)
  }
  return (
    <div className='page container'>
      <Link to="/product" className='fs-1 text-primary'><i class='bx bx-arrow-back' ></i></Link>
      <div className='px-4 mt-3'>
      <Card title='Nike' actionName='Delete From Cart' action={click} btn={<span> <i class='bx bxs-trash'/> Delete From Cart</span>}/>
      </div>
    </div>
  )
}
export default Cart