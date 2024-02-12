import {compose, applyMiddleware} from "redux";

import {configureStore} from '@reduxjs/toolkit'

import logger from 'redux-logger';


import {RootReducer} from './RootReducer'

const loggerMiddleware = store => next => action => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
};

const middleware = process.env.NODE_ENV === 'development' ?
    (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware) :
    undefined;


export const Store = configureStore({
    reducer: RootReducer,
    middleware: middleware
});


console.log(Store)

