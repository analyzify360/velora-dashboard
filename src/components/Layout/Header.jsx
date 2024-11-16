import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; // Import the CSS file for styling
import logo from '../../nestlest.svg'; // Import the logo image
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="title-container">
        <span className="title">Velora</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/api-docs">API Docs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;