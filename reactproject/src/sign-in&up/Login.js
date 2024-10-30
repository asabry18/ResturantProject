import React, { useState } from "react";
import logo from "../assets/images/header/logo.png";
import { Container } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  //const history = useHistory();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmail(email);
      setPassword(password);
      console.log(email, password);
    }
  };

  //const handleSignUp = () => {
  //  history.push('/signup');
  //};

  return (
    <div className="bg">
      <img src={logo} alt="logo" />
      <div className="login-container">
        <h2>Sign in </h2>

        <form onSubmit={handleSubmit}>
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
          don`t have an account ? <a href=""> Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
