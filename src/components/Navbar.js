import React from 'react';
import './Navbar.css'; // Import the Navbar styling file
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Job Hunter</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/all-jobs" className="nav-link">
          All Jobs
        </Link>
        <Link to="/improve-resume" className="nav-link">
          Improve Resume
        </Link>
        <Link to="/subscribe-jobs" className="nav-link">
          Subscribe Jobs
        </Link>
        <Link to="/job-summary" className="nav-link">
          Job Summary
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
