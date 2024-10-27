import React from "react";
import logo from "../assets/images/header/logo.png"; // Corrected image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
export default function NavBar() {
  return (
    <Navbar  expand="lg" className="p-2">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo} // Using imported logo
            alt="Logo"
            width="100"
            height="30"
            className="d-inline-block align-text-center justify-content-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/blogs-Details">Reservation</Nav.Link>
          </Nav>
          <form className="d-flex" role="search">
            <button className="text-black ms-2 border-0" type="submit">
              <FontAwesomeIcon icon={faHeadset} className="fa-xl me-1 custom-icon" />
              +880 123 465 789
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

