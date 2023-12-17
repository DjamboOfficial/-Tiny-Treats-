import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/fetchProducts";
import Navbar from "../../components/Navbar";

const ArtsAndCraftsPage = () => {
  const [artsAndCraftsProducts, setArtsAndCraftsProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchArtsAndCraftsProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        const artsAndCraftsProducts = allProducts.filter((product) =>
          product.category.includes("Arts & Crafts")
        );
        setArtsAndCraftsProducts(artsAndCraftsProducts);
      } catch (error) {
        console.error("Error fetching Arts & Crafts products:", error);
      }
    };
    fetchArtsAndCraftsProducts();
  }, []);

  const handleAddToFavorites = (product) => {
    if (favorites.some((favProduct) => favProduct._id === product._id)) {
      console.log("Product is already in favorites.");
      return;
    }
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...storedFavorites, product];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const handleAddToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar />

      <div className="product-grid-container">
        {artsAndCraftsProducts.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <div className="price-container">
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                {/* Additional product details go here */}
                <p>{product.description}</p>
                <div className="product-buttons">
                  <button
                    className="button"
                    onClick={() => handleAddToFavorites(product)}
                  >
                    Add to Favorites
                  </button>
                  <button
                    className="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtsAndCraftsPage;
