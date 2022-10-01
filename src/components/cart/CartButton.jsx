import React from 'react'

const buy =() =>{
    console.log("buying now!")
}
const CartButton = ({title="Buy Now !"}) => {
  return (
    <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
        {title}
    </button>
  )
}

export default CartButton