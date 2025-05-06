import React, { useState } from 'react';
import '../css/Profile.css';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [bio, setBio] = useState('Hello! I am a software developer.');

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic (API call or local storage)
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSave}>
        <h2>My Profile</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="4"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
