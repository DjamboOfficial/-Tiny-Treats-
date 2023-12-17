import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import CatalogueNavbar from "../components/CatalogueNavbar";
import ProductGrid from "../components/ProductGrid";
import backgroundImage from "../assets/BackgroundImage.png";
import { useParams } from "react-router-dom";

const Catalogue = () => {
  const [cart, setCart] = useState([]);
  const cartCount = cart.length;
  const { category } = useParams();
  console.log(cart.length)

  useEffect(() => {
    // Fetch cart data from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavBar cartItemCount={cartCount} />
      <CatalogueNavbar />
      <ProductGrid />
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
  );
};

export default Catalogue;