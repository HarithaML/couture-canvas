import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import SignIn from './routes/SignIn';


const App = () => {
  return (
    <div className='bg-[#594157] w-screen h-screen p-4'>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn/>} />
        </Route>
      </Routes>
    </div>

  );
};

export default App;
