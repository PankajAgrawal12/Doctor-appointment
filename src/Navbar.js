import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">Doctor Appointment</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/appointments">My Appointments</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
