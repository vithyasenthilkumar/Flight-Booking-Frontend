// frontend/src/components/AdminDashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [showAddFlight, setShowAddFlight] = useState(false);
  const [showRemoveFlight, setShowRemoveFlight] = useState(false);
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState('');

  const handleAddFlightSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/flights', {
        flightNumber,
        date,
        time,
        seats,
      });
      alert('Flight added successfully');
    } catch (error) {
      alert('Failed to add flight');
    }
  };

  const handleRemoveFlightSubmit = async (e) => {
    e.preventDefault();
    // Implement remove flight logic here
    alert('Remove flight functionality not implemented yet');
  };

  const handleViewBookings = async () => {
    // Implement view bookings logic here
    alert('View bookings functionality not implemented yet');
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Welcome to Admin Dashboard</h2>
      <div className="admin-options">
        <div className="admin-option" onClick={() => setShowAddFlight(!showAddFlight)}>
          Add Flight
        </div>
        <div className="admin-option" onClick={() => setShowRemoveFlight(!showRemoveFlight)}>
          Remove Flight
        </div>
        <div className="admin-option" onClick={handleViewBookings}>
          View Bookings
        </div>
      </div>
      {showAddFlight && (
        <div className="add-flight-form">
          <h3>Add Flight</h3>
          <form onSubmit={handleAddFlightSubmit}>
            <input
              type="text"
              placeholder="Flight Number"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="number"
              placeholder="Seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
            <button type="submit">Add Flight</button>
          </form>
        </div>
      )}
      {showRemoveFlight && (
        <div className="remove-flight-form">
          <h3>Remove Flight</h3>
          <form onSubmit={handleRemoveFlightSubmit}>
            <input
              type="text"
              placeholder="Flight Number"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
            <button type="submit">Remove Flight</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
