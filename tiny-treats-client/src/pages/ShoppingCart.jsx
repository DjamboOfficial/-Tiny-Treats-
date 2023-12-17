import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MdDeleteForever } from "react-icons/md";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.length;
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [selectedDelivery, setSelectedDelivery] = useState("standardDelivery");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch cart data from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeProduct = (productName) => {
    const updatedCart = cart.filter((product) => product.name !== productName);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (productName, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.name === productName) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (productName) => {
    const updatedCart = cart.map((product) => {
      if (product.name === productName) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productName) => {
    const updatedCart = cart.map((product) => {
      if (product.name === productName && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const coupons = {
    secretsanta: 5, // €5 discount for purchases over €50
    tinytreatsspecialdiscount: 20, // €20 discount for purchases over €100
  };

  const delivery = {
    standardDelivery: 2, // Standard Delivery (3-5 business days) - €2.00
    express24: 5, // Express Delivery (24 hours) - €5.00
    expressSameDay: 10, // Express Same-Day Delivery - €10.00
  };

  // Function to calculate total price before coupon discount
  const calculateTotalPriceBeforeDiscount = () => {
    return cart.reduce((total, product) => {
      const price =
        typeof product.price === "number"
          ? product.price
          : parseFloat(product.price);
      return isNaN(price) ? total : total + price;
    }, 0);
  };

  // Function to calculate total price after applying the coupon discount
  const calculateTotalPrice = () => {
    const totalPriceBeforeDiscount = calculateTotalPriceBeforeDiscount();

    // Check if the price before discount is below 50 for "secretsanta" coupon
    if (
      couponCode.toLowerCase() === "secretsanta" &&
      totalPriceBeforeDiscount < 50
    ) {
      // If below 50, exclude the coupon discount and return the original total price
      return totalPriceBeforeDiscount;
    }

    // Check if the price before discount is below 100 for "tinytreatsspecialdiscount" coupon
    if (
      couponCode.toLowerCase() === "tinytreatsspecialdiscount" &&
      totalPriceBeforeDiscount < 100
    ) {
      // If below 100, exclude the coupon discount and return the original total price
      return totalPriceBeforeDiscount;
    }

    const appliedDiscount = coupons[couponCode.toLowerCase()] || 0;
    const deliveryCost = delivery[selectedDelivery] || 0;
    const discountedTotal =
      totalPriceBeforeDiscount - appliedDiscount + deliveryCost;
    return discountedTotal < 0 ? 0 : discountedTotal;
  };

  // Calculate unique products, their quantities, and total price for each
  const productSummary = Array.from(
    new Set(cart.map((product) => product.name))
  ).map((productName) => {
    const quantity = cart.filter(
      (product) => product.name === productName
    ).length;
    const productPrice = parseFloat(
      cart.find((product) => product.name === productName)?.price || 0
    );
    const totalPrice = quantity * productPrice;

    return {
      name: productName,
      quantity: quantity,
      totalPrice: totalPrice,
    };
  });

  // Function to apply coupon and set discount amount
  const applyCoupon = () => {
    // Example coupons
    const coupons = {
      secretsanta: 5, // €5 discount for purchases over €50
      tinytreatsspecialdiscount: 20, // €20 discount for purchases over €100
    };

    const appliedDiscount = coupons[couponCode.toLowerCase()] || 0;
    const totalPriceBeforeDiscount = calculateTotalPriceBeforeDiscount();

    if (
      couponCode.toLowerCase() === "tinytreatsspecialdiscount" &&
      totalPriceBeforeDiscount < 100
    ) {
      // Handle the case where "tinytreatsspecialdiscount" coupon is not applicable
      // Set a message to be displayed in the UI
      setMessage(
        'The "tinytreatsspecialdiscount" coupon is only valid for purchases of €100 or more.'
      );
      setDiscount(0); // Reset discount
    } else if (
      couponCode.toLowerCase() === "secretsanta" &&
      totalPriceBeforeDiscount < 50
    ) {
      // Handle the case where "secretsanta" coupon is not applicable
      // Set a message to be displayed in the UI
      setMessage(
        'The "secretsanta" coupon is only valid for purchases of €50 or more.'
      );
      setDiscount(0); // Reset discount
    } else if (couponCode.toLowerCase() === "") {
      setMessage("");
    } else {
      setDiscount(appliedDiscount);
      setMessage(`Coupon "${couponCode}" applied successfully!`);
    }
  };

  // Reset discount when coupon code is cleared
  useEffect(() => {
    if (!couponCode) {
      setDiscount(0);
    }
  }, [couponCode]);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <NavBar cartItemCount={cartCount} />
      <section className="h-100 h-custom">
        <MDBContainer className="py-5 h-80">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-1">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {cartCount} items
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />

                        {productSummary.map((product) => (
                          <MDBRow
                            key={product.name}
                            className="mb-4 d-flex justify-content-between align-items-center"
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={
                                  cart.find(
                                    (prod) => prod.name === product.name
                                  )?.imageUrl
                                }
                                fluid
                                className="rounded-3"
                                alt={product.name}
                                width="100%"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {capitalizeFirstLetter(product.name)}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <MDBBtn color="link" className="px-2">
                                <MDBIcon fas icon="minus" />
                              </MDBBtn>
                              <MDBInput
                                type="number"
                                min="0"
                                defaultValue={product.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    product.name,
                                    parseInt(e.target.value, 10)
                                  )
                                }
                                size="sm"
                              />
                              <MDBBtn color="link" className="px-2">
                                <MDBIcon
                                  fas
                                  icon="plus"
                                  onChange={(e) =>
                                    updateQuantity(
                                      product.name,
                                      parseInt(e.target.value, 10)
                                    )
                                  }
                                />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              {/* Total price for individual product */}
                              <MDBTypography tag="h6" className="mb-0">
                                € {product.totalPrice.toFixed(2)}
                              </MDBTypography>
                            </MDBCol>

                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <a
                                href="#!"
                                className="text-muted"
                                onClick={() => removeProduct(product.name)}
                              >
                                <MdDeleteForever color="gray" fontSize="25px" />
                              </a>
                            </MDBCol>
                          </MDBRow>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" />
                            <Link to="/catalogue">Back to shop </Link>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5">
                            {cartCount} Tiny Treats
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            €{calculateTotalPriceBeforeDiscount().toFixed(2)}
                          </MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Delivery
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                            onChange={(e) =>
                              setSelectedDelivery(e.target.value)
                            }
                          >
                            <option value="standardDelivery">
                              Standard Delivery (3-5 business days) - €2.00
                            </option>
                            <option value="express24">
                              Express Delivery (24 hours) - €5.00
                            </option>
                            <option value="expressSameDay">
                              Express Same-Day Delivery - €10.00
                            </option>
                          </select>
                        </div>
                        <div>
                          <MDBTypography tag="h5">
                            Selected Delivery:{" "}
                            {capitalizeFirstLetter(selectedDelivery)}
                          </MDBTypography>
                          <br />
                        </div>

                        <div className="mb-5">
                          <MDBTypography
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            Enter Coupon Code
                          </MDBTypography>
                          <MDBRow className="mb-4">
                            <MDBCol md="6" className="mb-3">
                              <MDBInput
                                size="lg"
                                label="Coupon Code"
                                onChange={(e) => {
                                  setMessage(""); // Reset message when the input changes
                                  setCouponCode(e.target.value);
                                }}
                              />
                            </MDBCol>
                            <MDBCol md="6" className="mb-3">
                              <MDBBtn
                                color="dark"
                                style={{ width: "150px", height: "50px" }}
                                onClick={applyCoupon}
                              >
                                Apply Coupon
                              </MDBBtn>
                            </MDBCol>
                            {message && (
                              <div className="text-danger">{message}</div>
                            )}
                          </MDBRow>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            € {calculateTotalPrice().toFixed(2)}
                          </MDBTypography>
                        </div>
                        <MDBBtn color="blue" block size="lg">
                          <PaypalCheckoutButton />
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
