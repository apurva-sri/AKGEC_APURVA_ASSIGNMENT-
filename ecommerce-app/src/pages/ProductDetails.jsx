import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../services/api";

import "../styles/productDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="product-details">
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-content">
        <h1>{product.title}</h1>

        <p className="category">Category : {product.category}</p>

        <p>{product.description}</p>

        <p className="rating">⭐ {product.rating}</p>

        <p>Brand : {product.brand}</p>

        <p>Stock : {product.stock}</p>

        <h2 className="price">${product.price}</h2>

        <button className="add-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
