import logo from ".././assets/images/header/logo.png"; // Corrected image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
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
                    <Nav.Link href="#" className="active">Home</Nav.Link>
                    <Nav.Link href="#">Menu</Nav.Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                    <Nav.Link href="#">Reservation</Nav.Link>
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

export default Header;