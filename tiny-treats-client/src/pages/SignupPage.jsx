import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const API_URL = "http://localhost:3000";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setUserName(e.target.value);

  const requestBody = { email, password, username };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

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
      <MDBContainer className="SignupPage">
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="6">
            <MDBTypography tag="h1" className="text-center mb-4">
              Sign Up
            </MDBTypography>

            <form onSubmit={handleSignupSubmit}>
              <MDBInput
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />

              <MDBInput
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />

              <MDBInput
                label="Name"
                type="text"
                name="name"
                value={username}
                onChange={handleName}
              />

              <MDBBtn
                color="primary"
                type="submit"
                style={{ width: "100px", height: "40px" }}
              >
                Sign Up
              </MDBBtn>
            </form>

            {errorMessage && (
              <MDBTypography tag="p" className="error-message text-center mt-3">
                {errorMessage}
              </MDBTypography>
            )}

            <MDBTypography tag="p" className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default SignupPage;
