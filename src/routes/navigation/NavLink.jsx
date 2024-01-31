import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, text }) => {
  return (
    <Link className="text-white hover:text-black mr-10" to={to}>
      <span className="nav-link text-2xl">{text}</span>
    </Link>
  );
};

export default NavLink;
