import React, { useState } from 'react';
import '../css/Login.css'; 
import { login } from '../scripts/Auth.js';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username,password);
    setMessage(result);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please enter both username and password.');
      setMessageType('error'); 
      return;
    }

    const result = login(username, password); 
    if (result === "Invalid username or password.") {
      setMessage(result);
      setMessageType('error'); 
    } else {
      setMessage(result); 
      setMessageType('success'); 
      navigate('/profile');
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

      {message && (
        <p className={`login-message ${messageType}`}>
          {message}
        </p>
      )}
    </div>
  );
}
}
