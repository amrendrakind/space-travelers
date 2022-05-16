import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './NavBar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/rockets',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-bar">
      <h2 className="nav-brand"><a href="/">Space Travellers Hub</a></h2>
      <ul className="nav-links">
        {links.map((link) => (
          <li className="nav-link" key={link.id}>
            <NavLink to={link.path} exact="true">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="account-icon"><FaUser className="user-icon" /></div>
    </nav>
  );
};
export default Navbar;
