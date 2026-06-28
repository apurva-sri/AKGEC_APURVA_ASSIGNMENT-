import { useCart } from "../context/CartContext";

import CartItem from "../components/CartItem";
import BillSummary from "../components/BillSummary";

import "../styles/cart.css";

function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <h2>Your Cart is Empty.</h2>;
  }

  return (
    <div className="cart-page">
      <div className="cart-products">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <BillSummary />
    </div>
  );
}

export default Cart;
