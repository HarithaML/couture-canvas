import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {PersistGate} from 'redux-persist/integration/react';
import {Store} from "./store/Store";
import {Provider} from "react-redux";
import {stripePromise} from "./utils/Stripe";
import {Elements} from "@stripe/react-stripe-js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>

                <BrowserRouter>
                    <Elements stripe={stripePromise}>

                    <App/>
                    </Elements>

                </BrowserRouter>

        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
