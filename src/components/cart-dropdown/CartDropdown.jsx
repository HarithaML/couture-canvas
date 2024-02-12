import React from "react";

import {useNavigate} from "react-router-dom";
import CartItem from "./CartItem";
import {selectCartItems, selectIsCartOpen} from "../../store/cart/CartSelector";
import {useDispatch, useSelector} from "react-redux";
import {setIsCartOpen} from "../../store/cart/CartAction";


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('checkout')
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <div
            className="fixed top-30 right-20 bg-white border border-gray-300 p-4  shadow-md h-[400px] w-[300px] flex  flex-col items-center justify-center rounded-xl">
            <div className="max-h-[400px] overflow-y-auto w-[300px] flex flex-col  ">
                {cartItems.length === 0 ?
                    (<span className="flex items-center justify-center mb-10 cart-empty text-xl">
                Your cart is empty!!
             </span>) :
                    (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)
                    )}
            </div>
            <button className="bg-[#726DA8] p-2 rounded-xl mb-0 mt-5" onClick={handleClick}>Go To Checkout</button>
        </div>
    )
}

export default CartDropdown;