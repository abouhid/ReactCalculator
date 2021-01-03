import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">
      <h1>Home</h1>
    </Link>
    <Link to="/calculator">
      <h1>React Calculator</h1>
    </Link>
    <Link to="/quotes">
      <h1>Quotes</h1>
    </Link>
  </nav>
);

export default Header;
