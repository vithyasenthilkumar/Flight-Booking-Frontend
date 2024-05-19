import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserBooking.css';

const UserBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/users/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data.bookings);
      } catch (error) {
        console.error('Error fetching bookings', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>
      {bookings.length > 0 ? (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.flightNumber}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found</p>
      )}
    </div>
  );
};

export default UserBooking;
