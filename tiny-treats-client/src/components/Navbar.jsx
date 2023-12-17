import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { ImGift } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";

function NavBar({ cartItemCount }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-0 navbar-custom">
        <Container fluid>
          <Navbar.Brand href="#home" className="ms-0 me-auto">
            <ImGift style={{ marginRight: "10px", marginTop: "-10px" }} />
            Tiny Treats
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/" className="navbar-link custom-link pe-3">
              Home
            </Link>
            <Link to="/about" className="navbar-link custom-link pe-3">
              About
            </Link>
            <Link to="/catalogue" className="navbar-link custom-link pe-3">
              Catalogue
            </Link>
            <Link to="/dashboard" className="navbar-link custom-link pe-3">
              Dashboard
            </Link>
            <Link to="/logout" className="navbar-link custom-link pe-3">
              Logout
            </Link>
            <Link to="/login" className="navbar-link custom-link pe-3">
              Login
            </Link>
            <Link to="/signup" className="navbar-link custom-link pe-3">
              Signup
            </Link>
            <Link to="/cart" className="navbar-link custom-link pe-3">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge className="badge">{cartItemCount}</Badge>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
