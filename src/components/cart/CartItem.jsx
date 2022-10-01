import React from "react";

const CartItem = ({ item = {} }) => {
  return (
    <li className="list-group-item ">
      <div className="my-0 d-flex justify-content-between align-items-center">
        <span className="fw-bolder fs-6 me-auto">
          {item.name} ({item.price})
        </span>
        <div className="btn-group">
          <button className="btn border">-</button>
          <button className="btn btn-light border " disabled> 1 </button>
          <button className="btn border">+</button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 description w-100">
        {item.description}
      </p>
    </li>
  );
};

export default CartItem;
