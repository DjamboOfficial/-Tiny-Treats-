import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import "../index.css";
import { fetchProducts } from "../services/fetchProducts";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortOrderByRating, setSortOrderByRating] = useState("asc");

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchProductsData();
  }, []);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const productsInRows = chunkArray(products, 3);

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

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;

    const filledStarStyle = {
      color: "#ffd700", // Color for filled stars (yellow)
    };

    const emptyStarStyle = {
      color: "#ccc", // Color for empty stars (gray)
    };

    return (
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index} style={filledStarStyle}>
            &#9733; 
          </span>
        ))}
        {[...Array(remainingStars)].map((_, index) => (
          <span key={index} style={emptyStarStyle}>
            &#9734;
          </span>
        ))}
      </div>
    );
  };

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      const ratingA = parseFloat(a.rating.value);
      const ratingB = parseFloat(b.rating.value);
      switch (sortOrder) {
        case "desc":
          return priceA - priceB;
        case "asc":
          return priceB - priceA;
        case "ratingDesc":
          return ratingA - ratingB;
        case "ratingAsc":
          return ratingB - ratingA;
        default:
          return 0;
      }
    });
    setProducts(sortedProducts);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    sortProducts();
  };

  return (
    <div
      className="product-grid-container"
      style={{ margin: "2% 5% 5% 5%", background: "white" }}
    >
      <div className="sort-dropdown">
        <label htmlFor="sort" style={{margin:"2% 1%"}}>Sort by:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Lowest to Highest Price</option>
          <option value="desc">Highest to Lowest Price</option>
          <option value="ratingAsc">Lowest to Highest Rating</option>
          <option value="ratingDesc">Highest to Lowest Rating</option>
        </select>
      </div>
      {productsInRows.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          className="product-row"
          style={{ marginLeft: "5%" }}
        >
          {row.map((product) => (
            <Col key={product._id} md={4}>
              <div className="product-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    width: "80%",
                    borderRadius: "10px",
                    marginTop: "1%",
                  }}
                />
                <div className="product-details">
                  <div className="price-container">
                    <div style={{ fontWeight: "bold" }}>
                      {capitalizeFirstLetter(product.name)}
                    </div>
                    <div className="product-buttons">
                      <div className="product-price">
                        Price: {product.price}
                        <StarRating rating={product.rating.value} />
                        <button
                          className="btn btn-light border-0"
                          onClick={() => handleAddToFavorites(product)}
                          style={{ margin: "0px 10px 10px 5px" }}
                        >
                          <FaHeart color="red" fontSize="20px" />
                        </button>
                        <button
                          className="btn btn-light border-0"
                          onClick={() => handleAddToCart(product)}
                          style={{ margin: "0px 10px 10px 5px" }}
                        >
                          <GiShoppingCart color="black" fontSize="20px" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default ProductGrid;