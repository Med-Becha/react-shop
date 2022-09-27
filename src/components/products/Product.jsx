import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product={}}) => {
  let nav = useNavigate()
  return (
    <li onClick={() =>nav(`/single/${product.id}`)} >
        {product.name}
    </li>
  )
}

export default Product