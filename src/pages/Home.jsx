import React from 'react'
import Products from '../components/products/Products'
import data from "../data.js"
const Home = () => {
  return (
    <div>
        <Products Products={data} />
    </div>
  )
}

export default Home