/* import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/favorites/"); // Update the URL and port
        const data = await response.json();
        setFavoriteProducts(data);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  return (
    <div className="favorites-container">
      <h2>Your Favorite Products</h2>
      {favoriteProducts.map((product) => (
        <div key={product._id} className="favorite-product-card">
          <img src={product.imageUrl} alt={product.name} />
          <div className="favorite-product-details">
            <div className="favorite-price-container">
              <p className="favorite-product-price">{product.price}</p>
            </div>
            <div className="favorite-product-info">
              <h3>{product.name}</h3>
              <p>{/* Additional product details go here }</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;

*/
