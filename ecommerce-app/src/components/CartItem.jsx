import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div className="cart-info">
        <h3>{item.title}</h3>

        <p>{item.category}</p>

        <h2>${item.price}</h2>
      </div>

      <div className="cart-actions">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>+</button>

        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
