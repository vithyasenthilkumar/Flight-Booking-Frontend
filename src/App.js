import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home/Home";
import UserSignup from "./components/UserSignup/UserSignup";
import UserLogin from "./components/UserLogin/UserLogin"
import UserBooking from "./components/UserBookings/UserBooking";
import SearchFlights from "./components/SearchFlights/SearchFlights";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Filght Booking App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/User/SignUp" >User Signup</Link>
                <Link to="/User/Login">User Login</Link>
                <Link to="/User/Booking">User Booking</Link>
                <Link to="/User/SearchFlights">Search Flights</Link>
                <Link to="/Admin/Login">Admin Login</Link>
                <Link to="/Admin/Dashboard">Admin Dashboard</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route path='/User/SignUp' element={<UserSignup/>}></Route>
                 <Route path='/User/Login' element={<UserLogin/>}></Route>
                 <Route path='/User/Booking' element={<UserBooking/>}></Route>
                 <Route path='/User/SearchFlights' element={<SearchFlights/>}></Route>
                 <Route path='/Admin/Login' element={<AdminLogin/>}></Route>
                 <Route path='/Admin/Dashboard' element={<AdminDashboard/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;