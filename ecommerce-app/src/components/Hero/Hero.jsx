import HeroImage from "../../assets/hero.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🛍 New Collection 2026</span>

        <h1>
          Discover Amazing
          <span> Products</span>
        </h1>

        <p>
          Shop the latest products with the best prices. Fast delivery, trusted
          brands, and quality you can rely on.
        </p>

        <button className="hero-btn">Shop Now</button>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Shopping" />
      </div>
    </section>
  );
}

export default Hero;
