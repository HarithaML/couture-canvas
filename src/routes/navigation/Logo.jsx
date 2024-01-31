import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="nav-link" to="/">
      <img alt="logo" src="/images/logo.png" className="w-[200px] h-[60px] rounded-[10px]" />
    </Link>
  );
};

export default Logo;
