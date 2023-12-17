import React from "react";
import NavBar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Testimonials from "../components/Testimonials";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const cartCount = cart.length;

  useEffect(() => {
    // Fetch cart data from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="homepage-container">
      <NavBar cartItemCount={cartCount} />
      <ImageSlider />
      <div style={{ padding: "-0% 10%", marginTop: "-1%", textAlign: "center" }}>
        <p>
          Explore a realm of joy at TinyTreats, the ultimate online haven
          catering to enthusiasts of considerate gift-giving. Uncover an array
          of distinctive gems, all priced under 15 €, meticulously chosen for
          those with refined tastes and an ardor for meaningful surprises for
          family, friends, and beyond.
          <br />
          TinyTreats: a website for the lovers of thoughtful giving.
        </p>
        <p style={{ fontWeight: "bold" }}>Tiny Treats</p>
        <p style={{ fontWeight: "bold" }}>
          Try Risk-Free, Free Returns Within 60-Days
        </p>
        <Testimonials />
      </div>
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
export default HomePage;
