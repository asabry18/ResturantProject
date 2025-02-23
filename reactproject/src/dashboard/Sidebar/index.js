import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faBars,
  faUtensils,
  faStar,
  faCalendarCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/dashborad/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const toggleSidebar = () => setShow(!show);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const NavLinks = () => (
    <Nav className="flex-column w-100">
      <Nav.Link as={Link} to="/dashboard/menu" className="sidebar-link">
        <FontAwesomeIcon icon={faUtensils} className="me-2" /> Menu
      </Nav.Link>
      <Nav.Link as={Link} to="/dashboard/testimonials" className="sidebar-link">
        <FontAwesomeIcon icon={faStar} className="me-2" /> Testimonials
      </Nav.Link>
      <Nav.Link as={Link} to="/dashboard/reservation" className="sidebar-link">
        <FontAwesomeIcon icon={faCalendarCheck} className="me-2" /> Reservations
      </Nav.Link>
      <Nav.Link as={Link} to="/dashboard/contact-us" className="sidebar-link">
        <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contacts
      </Nav.Link>
    </Nav>
  );

  return (
    <div className="dashboard-container">
      {/* Desktop Sidebar */}
      {isAuthenticated && (
        <aside className="desktop-sidebar">
          <div className="sidebar-header">
            <img src={logo} alt="logo" className="sidebar-logo" />
          </div>
          <div className="sidebar-content">
            <NavLinks />
          </div>
          <div className="sidebar-footer">
            <button className="logout-btn" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
            </button>
          </div>
        </aside>
      )}

      <div className="mobile-header d-md-none">
        <Navbar expand={false}>
          <Container fluid>
            <img src={logo} alt="logo" className="mobile-logo" />
            <Navbar.Toggle
              aria-controls="sidebar-nav"
              onClick={toggleSidebar}
              className="border-0"
            >
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
          </Container>
        </Navbar>
      </div>

      <Offcanvas
        show={show}
        onHide={toggleSidebar}
        placement="start"
        className="mobile-sidebar"
      >
        <Offcanvas.Header closeButton>
          <img src={logo} alt="logo" className="sidebar-logo" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isAuthenticated && (
            <>
              <NavLinks />
              <div className="mobile-sidebar-footer">
                <button className="logout-btn w-100" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                  Logout
                </button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <main className="main-content">
        {isAuthenticated ? (
          <>
            <div className="content-body">
              <Outlet />
            </div>
          </>
        ) : (
          <div className="unauthorized-message">
            <h2>Please log in to access the dashboard.</h2>
          </div>
        )}
      </main>
    </div>
  );
}
