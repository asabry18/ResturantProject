import logo from ".././assets/images/header/logo.png"; // Corrected image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <>
        <Navbar expand="lg" className="p-2">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo" width="100" height="30"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" className="toggler"/>
                <Navbar.Collapse id="navbarSupportedContent" className="toggler">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
                    <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/blogs-details">Reservation</Nav.Link>
                </Nav>
                <form className="d-flex" role="search">
                    <button className="numButton text-black ps-0 border-0" type="submit">
                    <FontAwesomeIcon icon={faHeadset} className="fa-xl me-1 custom-icon" />
                    +880 123 465 789
                    </button>
                </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}
