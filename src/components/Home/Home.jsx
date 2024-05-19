import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Flight Booking App</h1>
      <div className="home-links">
        <Link to="/User/Signup" className="home-link">User Signup</Link>
      </div>
    </div>
  );
};

export default Home;
