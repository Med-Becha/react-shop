import NoContent from "../components/extra/NoContent";
import CartItem from "../components/cart/CartItem";
import CartNumbers from "../components/cart/CartNumbers";
import CartButton from "../components/cart/CartButton";
import {useSelector} from "react-redux"

const Cart = () => {
  const {items} = useSelector(state => state.cart)
  if (items.length === 0) return <NoContent text="Nothing in your cart" btnText="Browse Products" />
  return (
    <div className="row py-3">
      <div className="col-12 col-md-10 col-xl-8 mx-auto">
        <div id="cart" className="border p-3 bg-white text-dark my-3 my-mb-0 rounded" >
          <h4 className="mb-3 px-1">Cart</h4>
          <ul className="list-group mb-3 cart-list">
            {items.map((i) => (<CartItem key={i.id} item={i} /> ))}
          </ul>
          <ul className="list-group mb-3 cart-list">
          <CartNumbers />
          </ul>
            
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default Cart;
