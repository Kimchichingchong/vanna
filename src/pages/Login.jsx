import React, { useState } from 'react';
import '../css/Login.css'; 
import { login } from '../scripts/Auth.js';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username,password);
    console.log(result);
  };

  return (
    <><div className="login-container">
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
          <a href="/register"> Register</a>
        </div>
      </form>
    </div>
   
    </>
  );
}
