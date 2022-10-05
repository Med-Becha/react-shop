import React from 'react'
import {useNavigate} from "react-router-dom"

const CartButton = ({title="Buy Now !"}) => {
  const nav = useNavigate()
  const buy =() =>{
    if (window.confirm("wold you like to place your order ?")){
      window.alert("order placed successfully!")
      nav("/")
      window.location.reload()
    }
    
  }
  return (
    <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
        {title}
    </button>
  )
}

export default CartButton