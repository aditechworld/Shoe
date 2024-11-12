import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Container from '../components/containers/Container'
import Card from '../components/card/Card'
import { useLoaderData } from 'react-router-dom'

function Product() {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>
    <Navbar/>
      <Container>
        <Card/>
        {/* {data} */}
      </Container>
    </div>
  )
}

export default Product