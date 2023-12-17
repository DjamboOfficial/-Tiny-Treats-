import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/fetchProducts";
import Navbar from "../../components/Navbar";

const AccessoriesPage = () => {
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAccessoriesProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        const accessoriesProducts = allProducts.filter((product) =>
          product.category.includes("Accessories")
        );
        setAccessoriesProducts(accessoriesProducts);
      } catch (error) {
        console.error("Error fetching accessories products:", error);
      }
    };
    fetchAccessoriesProducts();
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
      {accessoriesProducts.map((product) => (
        <div
          key={product._id}
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
              style={{
                padding: "5px 10px",
                margin: "5px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleAddToFavorites(product)}
            >
              Add to Favorites
            </button>
            <button
              style={{
                padding: "5px 10px",
                margin: "5px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccessoriesPage;
