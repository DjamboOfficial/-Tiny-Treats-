import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Catalogue from "./pages/Catalogue";
import UserDashboard from "./pages/Dashboard";
import ShoppingCart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";
import Accessories from "./pages/landing-pages/Accessories";
import ArtsAndCraft from "./pages/landing-pages/ArtsAndCrafts";
import Decor from "./pages/landing-pages/Decor";
import EcoFriendly from "./pages/landing-pages/Eco-Friendly";
import Electronics from "./pages/landing-pages/Electronics";
import Fashion from "./pages/landing-pages/Fashion";
import Gadgets from "./pages/landing-pages/Gadgets";
import Gifts from "./pages/landing-pages/Gifts";
import HomeAndLiving from "./pages/landing-pages/HomeAndLiving";
import Jewelry from "./pages/landing-pages/Jewelry";
import Kitchen from "./pages/landing-pages/Kitchen";
import Organization from "./pages/landing-pages/Organization";
import Photography from "./pages/landing-pages/Photography";
import Romantic from "./pages/landing-pages/Romantic";
import Wellness from "./pages/landing-pages/Wellness";
import Mystical from "./pages/landing-pages/Mystical";
import Christmas from "./pages/landing-pages/Christmas";

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AfEWAHpYne1kT89z4rwIgJxyney_Y-5AmS-BjVFoB_YnhsL1rfJ0dtUn9hIS4msVp9X6LuPU59iXnEph",
        }}
      >
        <AuthProviderWrapper>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/Arts & Crafts" element={<ArtsAndCraft />} />
              <Route path="/Decor" element={<Decor />} />
              <Route path="/Eco-Friendly" element={<EcoFriendly />} />
              <Route path="/Electronics" element={<Electronics />} />
              <Route path="/Fashion" element={<Fashion />} />
              <Route path="/Gadgets" element={<Gadgets />} />
              <Route path="/Gifts" element={<Gifts />} />
              <Route path="/Home & Living" element={<HomeAndLiving />} />
              <Route path="/Jewelry" element={<Jewelry />} />
              <Route path="/Kitchen" element={<Kitchen />} />
              <Route path="/Organization" element={<Organization />} />
              <Route path="/Photography" element={<Photography />} />
              <Route path="/Romantic" element={<Romantic />} />
              <Route path="/Wellness" element={<Wellness />} />
              <Route path="/Mystical" element={<Mystical />} />
              <Route path="/Christmas" element={<Christmas />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route
                path="/cart"
                element={<ShoppingCart cart={cart} updateCart={updateCart} />}
              />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </Router>
        </AuthProviderWrapper>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
