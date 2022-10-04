import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {actions as cartActions} from "../../global/slices/cartSlice"
const Productbtn = ({product}) => {
  
  const dispatch = useDispatch()
  const {items} = useSelector(state => state.cart)
  const isInCart = Boolean(items.find(i => i.id === product.id))
 
  if (isInCart){
    return (
      <button onClick={() => dispatch(cartActions.removeFromCart(product))} className="btn btn-outline-danger d-block w-100">
        Remove From Cart
      </button>
    )
  } else{
    return(
      <button onClick={() => dispatch(cartActions.addToCart(product))} className="btn btn-outline-success d-block w-100">
        Add to Cart
      </button>
    )
  }
}

export default Productbtn