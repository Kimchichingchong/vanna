// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Schedule from './components/Schedule';
import Teams from './components/Teams';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <><Navbar />
    <Routes>  
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/schedule" element={<Schedule/>} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      
      </Routes></>
  );
}

export default App;
