import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import { FaHeartCrack } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";

const Dashboard = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState("");
  const cartCount = cart.length;
  console.log(cart.length);

  useEffect(() => {
    // Fetch favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // Use Set to filter out duplicates based on product _id
    const uniqueFavorites = Array.from(
      new Set(storedFavorites.map((product) => product._id))
    ).map((_id) => storedFavorites.find((product) => product._id === _id));
    setFavorites(uniqueFavorites);

    // Fetch cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    // Fetch username from local storage
    const storedUser = JSON.parse(localStorage.getItem("username")) || {};
    setUsername(storedUser.username || "");
  }, [cartCount]); // Add cartCount as a dependency to re-run the effect when the cart changes

  const handleRemoveFromFavorites = (productId) => {
    // Update local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = storedFavorites.filter(
      (product) => product._id !== productId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Update state
    setFavorites(updatedFavorites);
  };

  const handleAddToCart = (product) => {
    // Update local storage
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update state
    setCart(updatedCart);
  };

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <NavBar cartItemCount={cartCount} />
      <div className="dashboard-container">
        <div>
          {favorites.length > 0 ? (
            <Row className="favorites-grid" style={{ margin: "0% 5% 5% 5%" }}>
              {favorites.map((product, index) => (
                <Col md={4} key={`favorite_${index}_${product._id}`}>
                  <div className="favorite-card">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: "50%",
                        display: "block",
                        margin: "10% auto",
                        borderRadius: "10px",
                      }}
                    />
                    <div className="product-details">
                      <p style={{ marginTop: "2%", fontWeight: "bold" }}>
                        {capitalizeFirstLetter(product.name)}
                      </p>
                      <p>{product.description}</p>
                      <p>
                        <span
                          style={{ marginRight: "10px", fontWeight: "bold" }}
                        >
                          Price: {product.price}
                        </span>
                        <button
                          onClick={() => handleRemoveFromFavorites(product._id)}
                          className="btn btn-light border-0"
                          style={{ margin: "10px 10px 10px 5px" }}
                        >
                          <FaHeartCrack color="red" fontSize="20px" />
                        </button>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn btn-light border-0"
                        >
                          <GiShoppingCart color="black" fontSize="20px" />
                        </button>
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <p>No favorite products yet.</p>
          )}
        </div>
        <br />
        <footer
          style={{
            padding: "0.5%",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div>
            <a>Copyright </a>
            <span>&copy; 2023 Tiny Treats. All Rights Reserved</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
