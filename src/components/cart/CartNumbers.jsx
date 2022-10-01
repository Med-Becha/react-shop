import React from "react";

const CartNumbers = () => {
  const CartNumbers = {
    subtotal: 119.0,
    shipping: 2.0,
    tax: 11.9,
    total: 132.9,
  };
  const row = [
    { title: "subtotal", price: CartNumbers.total },
    { title: "shipping", price: CartNumbers.shipping },
    { title: "Tax", price: CartNumbers.tax },
    { title: "total (TND)", price: CartNumbers.total },
  ];
  return (
    <div id="cart-numbers">
      {row.map(({ title, price }) => (
        <li
          key={title}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{title}</span>
          <span className="text-muted">{price}</span>
        </li>
      ))}
    </div>
  );
};

export default CartNumbers;
