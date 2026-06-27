import { useNavigate } from "react-router-dom";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.thumbnail} alt={product.title} />

      <div className="product-info">
        <p className="category">{product.category}</p>

        <h3>{product.title}</h3>

        <p className="rating">⭐ {product.rating}</p>

        <h2>${product.price}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
