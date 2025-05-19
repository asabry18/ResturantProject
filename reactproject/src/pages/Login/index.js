import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginRequest = await axios.post("http://localhost:3001/api/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("authToken", loginRequest.headers["x-auth-token"]);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setEmailError("Invalid email or password");
    }
  };

  return (
    <div className="page-container">
      <div className="container mt-4 c-form">
        <div className="mb-5 text-center">
          <h2>Sign In</h2>
          <p>Sign in to continue</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="c-button">
            Login
          </button>
        </form>
        <div className="text-center mt-3 mb-3">
          <p>
            Don&apos;t have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
