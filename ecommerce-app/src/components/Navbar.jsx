import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/navbar.css";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">🛒 ShopEase</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/">Products</NavLink>
        </li>

        <li>
          <NavLink to="/cart">Cart ({totalItems})</NavLink>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search Products..." />
      </div>
    </nav>
  );
}

export default Navbar;
