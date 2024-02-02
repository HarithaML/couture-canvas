import React from 'react';
import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/navigation/Logo';
import NavLink from '../components/navigation/NavLink';
import ShoppingCart from '../components/navigation/ShoppingCart';
import { UserContext } from '../contexts/User';
import { signOutUser } from '../utils/Firebase';
import CartDropdown from '../components/cart-dropdown/CartDropdown';
import { CartContext } from '../contexts/Cart';


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  const navLinks = [
    { to: '/shop', text: 'Shop' },
    { to: '/contact', text: 'Contact' },
  ];




  return (

    <Fragment>
      <div className="flex flex-row justify-between p-8 border-2 m-4 border-double">
        <Logo />
        <div className="flex flex-row mr-8 mt-6 items-center justify-center">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.to} text={link.text} />
          ))}
          {currentUser ? (
            <NavLink to='/' text="SignOut" onClick={signOutUser} />
          ) : (
            <NavLink to='/auth' text="SignIn" />
          )}
          <ShoppingCart />
        </div>

      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>




  );
};

export default Navigation;
