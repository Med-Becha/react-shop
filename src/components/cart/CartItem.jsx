import React from "react";
import { useDispatch } from "react-redux";
import {actions as cartActions} from "../../global/slices/cartSlice"

const CartItem = ({ item = {} }) => {
  const dispatch = useDispatch()
  return (
    <li className="list-group-item ">
      <div className="my-0 d-flex justify-content-between align-items-center">
        <span className="fw-bolder fs-6 me-auto">
          {item.name} ({item.price})
        </span>
        <div className="btn-group">
          <button onClick={() => dispatch(cartActions.inctrementItemQuantity({item: item, amount: -1}))} 
          className="btn border" >-</button>
          <button className="btn btn-light border " disabled> {item.quantity} </button>
          <button onClick={() => dispatch(cartActions.inctrementItemQuantity({item: item, amount: 1}))} 
          className="btn border">+</button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 description w-100">
        {item.description}
      </p>
    </li>
  );
};

export default CartItem;
