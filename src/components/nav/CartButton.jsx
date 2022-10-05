import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

const CartButton = () => {
  const nav = useNavigate()
  const {items} = useSelector(state => state.cart)
  const btnBgColor = (items.length === 0 ) ? "none" : "white"

  return (
    <button className='btn btn-outline-success d-md-block mt-3 mt-lg-0 ' type='button' onClick={() => nav("/cart")} >
      <i className='bi bi-cart3'></i>
      <span className='mx-2'>Checkout</span>
      <span className={`badge text-success bg-${btnBgColor}`}>{items.length}</span>
    </button>
  )
}

export default CartButton