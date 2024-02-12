import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {setCurrentUser} from './store/user/UserAction';
import {createUserDocumentFromAuth, onAuthStateChangedListener,} from '../src/utils/Firebase';

import './App.css';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Auth from './routes/Auth';
import Contact from './routes/Contact';
import Checkout from './components/checkout/Checkout';
import {useDispatch} from "react-redux";
import Payment from "./components/payment-form/Payment";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <div className=' '>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path="shop/*" element={<Shop/>}/>
                    <Route path="auth" element={<Auth/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="payment" element={<Payment/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export default App;
