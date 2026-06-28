import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/navbar.css";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); //showing the total quantity of items, not the number of unique products
  return (
    <nav>
      <h2>E-Commerce</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart ({totalItems})</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
