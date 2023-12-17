import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const cartCount = cart.length;

  useEffect(() => {
    // Fetch cart data from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  return (
    <>
      <NavBar cartItemCount={cartCount} />;
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
    </>
  );
};

export default Payment;
