import React, { useState } from "react";
import logo from "../../assets/images/header/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
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
    <div className="bg">
      <img src={logo} alt="logo" />
      <div className="login-container">
        <h2>Sign in </h2>

        <form onSubmit={handleLogin}>
          <div>
            <input
              className="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          </div>
          <div>
            <input
              className="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          don`t have an account ? <Link to={"/register"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
