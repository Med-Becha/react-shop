import React from 'react'
import Product from './Product'

const Products = ({Products=[]}) => {
  return (
    <div>
      <ul className='px-5 user-select-none '>
        {Products.map((product)=>(<Product key={product.id} product={product} />))}
      </ul>
    </div>
  )
}

export default Products