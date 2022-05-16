import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import image from '../../SpaceLogo.png';

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
      <img className="spacelogo" src={image} alt="spacelogo" />
      <h2 className="nav-brand"><a href="/">Space Travellers Hub</a></h2>
      <ul className="nav-links">
        {links.map((link) => (
          <li className="nav-link" key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
