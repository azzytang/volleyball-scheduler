import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: team.courtnext@gmail.com</p>
          <p>Phone: (469)-756-7405</p>
          <p>Location: 3500 McDermott Rd, Plano, TX 75025</p>
        </div>

        <div className="footer-section links">
          <h3>Navigate</h3>
          <ul>
            <li>
              <Link to="/reserve">Reserve</Link>
            </li>
            <li>
              <Link to="/bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/add-place">Add New Place</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CourtNext. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
