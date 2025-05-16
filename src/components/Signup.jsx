import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};

    // Check if the user already exists
    if (storedUser.email === email) {
      alert("User already exists. Please log in.");
    } else {
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Signup successful! You can now log in.");
      navigate("/login"); // Redirect to login page after signup
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Signup</h2>
        <input
          className="signup-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignup}>
          Signup
        </button>
        <p className="signup-login">
          Already have an account? <Link to="/login" className="signup-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
