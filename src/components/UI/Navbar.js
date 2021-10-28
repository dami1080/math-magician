import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <a href="/" className="nav-brand">Math Magicians</a>
    <ul>
      <li>
        <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" activeClassName="active-link" exact>Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote" activeClassName="active-link" exact>Quote</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
