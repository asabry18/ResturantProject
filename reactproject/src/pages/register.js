import React, { useState } from "react";
import logo from "../assets/images/header/logo.png";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({}); // For storing validation errors

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, perform the desired action (e.g., submit data)
      console.log("Form submitted successfully:", formData);
      // Reset form
      setFormData({ name: "", email: "", password: "", rememberMe: false });
      setErrors({});
    }
  };

  return (
    <div className="page-container">
      {/* Navbar Section */}
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
        </div>
      </nav>

      {/* Sign-up Form Section */}
      <div className="container mt-4 c-form">
        <div className="mb-5 text-center">
          <h2>Sign Up</h2>
          <p>Sign up to continue</p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <button type="submit" className="c-button">Sign Up</button>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
        </form>
      </div>

      {/* Hello Text Section */}
      <div className="text-center mt-3 mb-3">
        <p>Already have an account? <a href="#">Sign in</a></p>
      </div>
    </div>
  );
}

export default Register;
