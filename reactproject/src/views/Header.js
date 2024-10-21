import React from "react";
import logo from "../images/header/logo.png"; // Corrected image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo} // Using imported logo
            alt="Logo"
            width="100"
            height="30"
            className="d-inline-block align-text-center justify-content-center"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reservation
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="text-black ms-2 border-0" type="submit">
              <FontAwesomeIcon icon={faHeadset} className="fa-xl me-1 custom-icon" />
              +880 123 465 789
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
