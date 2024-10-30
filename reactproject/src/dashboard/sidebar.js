import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/images/dashborad/logo.png'
import { Link, Outlet } from "react-router-dom";
export default function Sidebar() {

  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(!show);

  return (
    <div className="d-flex ">
      {/* Sidebar for larger screens only */}
      <div className="d-none d-md-flex flex-column sidebar-bg p-3" >
        <img className="sidebar-img my-3" src={logo} alt="logo" />
        <Nav className=' flex-column flex-grow-1 p-2' >
          <Nav.Link as={Link} to="/dashboard/menu" className="sidebar-color">Menu</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/blogs" className="sidebar-color">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/our-team" className="sidebar-color">Our Team</Nav.Link>
        </Nav>
        <button className="btn btn-danger">
      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
    </button>
        
      </div>

      {/* Mobile Navbar and Sidebar (Offcanvas) for small screens only */}
      <Navbar  expand="md" className="d-md-none">
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleSidebar} />
          
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={toggleSidebar} className="d-md-none sidebar-bg">
        <Offcanvas.Header closeButton>
            <img src={logo} alt="logo" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard/menu" className="sidebar-color">Menu</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/blogs" className="sidebar-color">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/our-team" className="sidebar-color">Our Team</Nav.Link>
          </Nav>
              <Nav.Link href="#logout" className="sidebar-color mt-5 "><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main content area */}
      <div className="flex-grow-1 p-4">
        <h2>Welcome to the Dashboard</h2>
        <Outlet />
      </div>
    </div>
  );
}
