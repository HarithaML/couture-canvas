import React from "react";
import CartItem from './CartItem'
import {MoodEmpty} from 'tabler-icons-react';
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/CartSelector";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartItemTotalPrice = useSelector(selectCartTotal);
    return (
        <div className="bg-white w-[1500px] h-[800px] m-10 p-20">
            <span className="cart-title text-6xl ">Your Cart</span>
            <hr className="my-4 border-t border-gray-300"/>
            <div className="flex flex-row items-center justify-center">
                {cartItems.length === 0 ? (
                    <div
                        className="flex flex-col items-center justify-center mt-[100px] bg-[#BEE7E8] rounded-full w-[400px] h-[400px] ">
                        <span className=" cart-empty text-2xl">Your cart is empty.</span>
                        <MoodEmpty
                            size={100}
                            strokeWidth={2}
                            color={'black'}
                        />
                        <span className="cart-empty text-2xl">Add Products to your cart!!</span>
                    </div>

                ) : (

                    <div className="flex flex-col">
                        <div className="grid grid-cols-1 flex-wrap overflow-x-scroll max-h-[500px] ">
                            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}

                        </div>
                        <hr className="my-4 border-t border-gray-300"/>
                        <div className="grid grid-cols-5 gap-2 mt-4 mb-4 items-center justify-center">
                            <span
                                className="flex col-start-3 col-end-4 items-center justify-center product text-4xl">Total:</span>
                            <span
                                className="flex col-start-4 col-end-5 items-center justify-start product text-4xl">${cartItemTotalPrice}</span>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Checkout;