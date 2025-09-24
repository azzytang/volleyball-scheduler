import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        CourtNext
      </Link>

      <div className="navbar-buttons">
        <Link to="/reserve">
          <button className="nav-btn">Reserve</button>
        </Link>

        <Link to="/reservations">
          <button className="nav-btn">My Bookings</button>
        </Link>

        <Link to="/contact">
          <button className="nav-btn">Contact</button>
        </Link>

        <Link to="/add-new-place">
          <button className="nav-btn">Add New Place</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
