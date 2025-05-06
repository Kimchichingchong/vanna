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
  const [messageType, setMessageType] = useState(''); // to track message type ('error' or 'success')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!username || !password) {
      setMessage('Please enter both username and password.');
      setMessageType('error'); // Set message type as 'error'
      return;
    }

    // Simulate login API call
    const result = login(username, password); // This should be replaced with actual login logic
    if (result === "Invalid username or password.") {
      setMessage(result);
      setMessageType('error'); // Set message type as 'error'
    } else {
      setMessage(result); // Assuming successful login message comes from `login`
      setMessageType('success'); // Set message type as 'success'
    }
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

      {/* Render message conditionally based on messageType */}
      {message && (
        <p className={`login-message ${messageType}`}>
          {message}
        </p>
      )}
    </div>
  );
}
}
