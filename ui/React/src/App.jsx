import React from 'react'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter,Routes,Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
async function getProduct(){
  return ""
  // const reposnse = await fetch("http://localhost:8080/product")
  // if(!reposnse.ok){
  //   throw new Error("Failed to load Product")    
  // }
  // return await reposnse.json();
}

const router = createBrowserRouter([
  {
    path:"/product",
    element:<Product/>,
    loader:getProduct
  },
  {
    path:"*",
    element:<ErrorPage/>
  },
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App