import { useState } from "react"
import logo from "../../assets/images/header/logo.png"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from "../../Context/CartContext"
import "./NavBar.css"

export default function NavBar({ isUserAdmin }) {
  const [expanded, setExpanded] = useState(false)
  const { cartItems } = useCart()

  const closeNavbar = () => setExpanded(false)

  return (
    <Navbar expand="lg" className="p-2" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-3">
          <img src={logo} alt="Logo" width="100" height="30" />
        </Navbar.Brand>

        <Navbar.Toggle  aria-controls="navbarSupportedContent" />
        
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto text-center">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" onClick={closeNavbar}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" onClick={closeNavbar}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/service" onClick={closeNavbar}>
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs" onClick={closeNavbar}>
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/reservation" onClick={closeNavbar}>
              Reservation
            </Nav.Link>
            {isUserAdmin && (
              <Nav.Link as={Link} to="/dashboard" onClick={closeNavbar}>
                Admin Panel
              </Nav.Link>
            )}
          </Nav>
          
          <div className="d-flex justify-content-center gap-3 align-items-center mt-3 mt-lg-0">
            <div className="cartWrapper position-relative">
              <Nav.Link as={Link} to="/checkout" onClick={closeNavbar} className="cartIcon position-relative">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="cartBadge position-absolute">{cartItems.length}</span>
              </Nav.Link>
            </div>

            <button className="numButton" type="button">
              <Nav.Link as={Link} to="/login" onClick={closeNavbar}>
                Log in 
              </Nav.Link>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}