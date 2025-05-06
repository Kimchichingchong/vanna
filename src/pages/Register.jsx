import React, { useState } from 'react';
import '../css/Register.css';
import { register } from '../scripts/Auth.js'; // ✅ Import the shared function

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setMessage('All fields are required.');
      setMessageType('error');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setMessageType('error');
      return;
    }

    // ✅ Use the shared register() function
    const result = register(username, password, email, null); // mobile is optional or null

    setMessage(result);
    setMessageType(result === 'Registration successful!' ? 'success' : 'error');

    if (result === 'Registration successful!') {
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>

        <div className="register-link">
          <span>Already have an account?</span>
          <a href="/login"> Login</a>
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
