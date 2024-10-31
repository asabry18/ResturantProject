import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/images/dashborad/logo.png';
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if auth token exists in local storage on mount
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const toggleSidebar = () => setShow(!show);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsAuthenticated(false);            // Update auth state
    navigate("/login");                   // Redirect to login page
  };

  return (
    <div className="d-flex ">
      {isAuthenticated && (
        <div className="d-none d-md-flex flex-column sidebar-bg p-3">
          <img className="sidebar-img my-3" src={logo} alt="logo" />
          <Nav className='flex-column flex-grow-1 p-2'>
            <Nav.Link as={Link} to="/dashboard/menu" className="sidebar-color">Menu</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/blogs" className="sidebar-color">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/our-team" className="sidebar-color">Our Team</Nav.Link>
          </Nav>
          <button className="btn btn-danger" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      )}

      <Navbar expand="md" className="d-md-none">
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleSidebar} />
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={toggleSidebar} className="d-md-none sidebar-bg">
        <Offcanvas.Header closeButton>
          <img src={logo} alt="logo" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isAuthenticated && (
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/dashboard/menu" className="sidebar-color">Menu</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/blogs" className="sidebar-color">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/our-team" className="sidebar-color">Our Team</Nav.Link>
              <Nav.Link className="sidebar-color mt-5 " onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Nav.Link>
            </Nav>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <div className="flex-grow-1 p-4">
        {isAuthenticated ? (
          <>
            <h2>Welcome to the Dashboard</h2>
            <Outlet />
          </>
        ) : (
          <h2>Please log in to access the dashboard.</h2>
        )}
      </div>
    </div>
  );
}
