import React from 'react';

import {ShoppingBag} from 'tabler-icons-react';

import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/CartSelector";
import {setIsCartOpen} from "../../store/cart/CartAction";

const ShoppingCart = () => {

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItemCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const handleClick = () =>
        dispatch(setIsCartOpen(!isCartOpen));

    return (

        <div className="nav-link relative " onClick={handleClick}>
            <ShoppingBag size={50} strokeWidth={2} color={'#FFFFFF'} className="mr-12"/>
            <span className='text-white absolute top-5 left-4 font-bold'>{cartItemCount}</span>
        </div>


    );
};

export default ShoppingCart;
