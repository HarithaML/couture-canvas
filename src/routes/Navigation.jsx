import React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './navigation/Logo';
import NavLink from './navigation/NavLink';
import ShoppingCart from './navigation/ShoppingCart';

const Navigation = () => {
  const navLinks = [
    { to: '/shop', text: 'Shop' },
    { to: '/contact', text: 'Contact' },
    { to: '/sign-in', text: 'Sign In' },
  ];

  return (
    <Fragment>
      <div className="flex flex-row justify-between m-2">
        <Logo />
        <div className="flex flex-row mr-8 mt-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.to} text={link.text} />
          ))}
          <ShoppingCart />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
