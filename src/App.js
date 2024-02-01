import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Auth from './routes/Auth';
import Contact from './routes/Contact';


const App = () => {
  return (
    <div className='bg-[#594157] pt-4 h-dvh'>
      <Routes>

        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Auth/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
   
      </Routes>
    </div>
  );
};

export default App;
