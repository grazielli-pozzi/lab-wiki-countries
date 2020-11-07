import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar bg-primary text-white">
      <Link to="/home">WikiCountries</Link>
    </nav>
  );
}

export default NavBar;
