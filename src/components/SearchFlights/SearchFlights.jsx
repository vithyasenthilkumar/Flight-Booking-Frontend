import React, { useState } from 'react';
import axios from 'axios';
import './SearchFlights.css';

const SearchFlights = () => {
  const [searchParams, setSearchParams] = useState({ date: '', time: '' });
  const [flights, setFlights] = useState([]);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:5000/api/flights', {
        params: searchParams,
      });
      setFlights(res.data.flights);
    } catch (error) {
      console.error('Error searching flights', error);
    }
  };

  return (
    <div className="search-flights-container">
      <h2>Search Flights</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={searchParams.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          placeholder="Time"
          value={searchParams.time}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {flights.length > 0 && (
        <table className="flights-table">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Available Seats</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.date}</td>
                <td>{flight.time}</td>
                <td>{flight.availableSeats}</td>
                <td>
                  <button>Book</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchFlights;
