import React from "react";
import {CircleMinus, CirclePlus, Trash} from 'tabler-icons-react';

import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/CartSelector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/CartAction";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));

    const {imageUrl, price, name, quantity} = cartItem;
    return (

        <div className="grid grid-cols-5 gap-2 mt-4 mb-4 items-center justify-center">
            <img src={imageUrl} alt={name} className="w-[100px] h-[100px] rounded-[100px] overflow-hidden"/>
            <span className=' product text-4xl'>{name}</span>
            <div className="flex flex-row items-center justify-center">
                <CircleMinus
                    size={48}
                    strokeWidth={2}
                    color={'black'}
                    onClick={removeItemHandler}
                />
                <span className='product text-4xl'>
                    {quantity}
                </span>
                <CirclePlus
                    size={48}
                    strokeWidth={2}
                    color={'black'}
                    onClick={addItemHandler}
                />

            </div>

            <span className="product text-4xl">${price}</span>
            <Trash
                size={40}
                strokeWidth={2}
                color={'black'}
                onClick={clearItemHandler}
            />

        </div>
    )
}

export default CartItem;