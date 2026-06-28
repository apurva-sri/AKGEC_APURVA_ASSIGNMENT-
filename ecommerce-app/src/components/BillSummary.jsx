import { useCart } from "../context/CartContext";

function BillSummary() {
  const { cartTotal } = useCart();

  const shipping = cartTotal > 100 ? 0 : 10;

  const tax = Number((cartTotal * 0.1).toFixed(2));

  const total = cartTotal + shipping + tax;

  return (
    <div className="bill-summary">
      <h2>Bill Summary</h2>

      <p>
        <span>Subtotal</span>

        <span>${cartTotal.toFixed(2)}</span>
      </p>

      <p>
        <span>Shipping</span>

        <span>${shipping}</span>
      </p>

      <p>
        <span>Tax</span>

        <span>${tax}</span>
      </p>

      <hr />

      <h3>
        <span>Total</span>

        <span>${total.toFixed(2)}</span>
      </h3>

      <button>Checkout</button>
    </div>
  );
}

export default BillSummary;
