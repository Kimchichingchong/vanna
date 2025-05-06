import React, { useState } from 'react';
import '../css/Login.css'; 
import { login } from '../scripts/Auth.js';
import { Link } from 'react-router-dom';  

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username,password);
    setMessage(result);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please enter both username and password.');
      return;
    }

    const result = login(username, password);
    setMessage(result); // Set the message based on the login result
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <div className="register-link">
          <span>Don't have an account?</span>
          <Link To="/register"> Register</Link>
        </div>
      </form>

      {/* Add this to render the message */}
      {message && <p className="login-message">{message}</p>} {/* Message shown below the form */}
    </div>
  );
}
}
