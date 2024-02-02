import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Auth from './routes/Auth';
import Contact from './routes/Contact';
import Checkout from './components/checkout/Checkout';
import Category from "./routes/Category";


const App = () => {

    return (
        <div className=' '>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="auth" element={<Auth/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="category" element={<Category/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export default App;
