import React from "react";
import logo from "../../assets/images/header/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar({ isUserAdmin }) {
  return (
    <Navbar expand="lg" className="p-2">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="me-auto">
          <img src={logo} alt="Logo" width="100" height="30" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse
          id="navbarSupportedContent"
          className="justify-content-center"
        >
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/service">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs">
              Contact Us
            </Nav.Link>
            {isUserAdmin && (
              <Nav.Link as={Link} to="/dashboard">
                Admin Panel
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>

        <div className="ms-auto">
          <button className="numButton" type="button">
            <Nav.Link as={Link} to="/reservation">
              Reservation
            </Nav.Link>
          </button>
        </div>
      </Container>
    </Navbar>
  );
}
