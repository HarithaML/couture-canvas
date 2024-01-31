import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'tabler-icons-react';

const ShoppingCart = () => {
  return (
    <Link className="nav-link" to="/">
      <ShoppingBag size={30} strokeWidth={2} color={'#FFFFFF'} className="mr-10" />
    </Link>
  );
};

export default ShoppingCart;
