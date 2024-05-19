import React, { useState } from 'react';
import axios from 'axios';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import './AdminLogin.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', formData);
      if (res.data.success) {
        alert(res.data.message);
        setIsLoggedIn(true); 
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  if (isLoggedIn) {
    return <AdminDashboard />;
  }
  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
