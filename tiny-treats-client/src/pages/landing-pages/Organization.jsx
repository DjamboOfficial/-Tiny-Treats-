import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/fetchProducts";
import Navbar from "../../components/Navbar";

const Organization = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchDecorProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        const decorProducts = allProducts.filter((product) =>
          product.category.includes("Organization")
        );
        setDecorProducts(decorProducts);
      } catch (error) {
        console.error("Error fetching Decor products:", error);
      }
    };
    fetchDecorProducts();
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
        {decorProducts.map((product) => (
          <div
            key={product._id}
            className="product-card"
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: "80%",
                borderRadius: "10px",
                marginTop: "1%",
              }}
            />
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              {product.name}
            </div>
            <div>
              <p style={{ fontWeight: "bold", margin: "0" }}>
                Price: {product.price}
              </p>
            </div>
            <div style={{ margin: "5px 0" }}>
              {/* Additional product details go here */}
              <p>{product.description}</p>
            </div>
            <div>
              <button
                className="button"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                }}
                onClick={() => handleAddToFavorites(product)}
              >
                Add to Favorites
              </button>
              <button
                className="button"
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organization;
