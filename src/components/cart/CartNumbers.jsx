import { useSelector } from "react-redux";

const CartNumbers = () => {
  const {cartNumbers} = useSelector(state => state.cart)
  const row = [
    { title: "subtotal", price: cartNumbers.subtotal },
    { title: "shipping", price: cartNumbers.shipping },
    { title: "Tax", price: cartNumbers.tax },
    { title: "total (TND)", price: cartNumbers.total },
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
