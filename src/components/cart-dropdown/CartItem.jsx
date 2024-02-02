import React from "react";

const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <div className="flex flex-row m-2">
            <img src={imageUrl} alt={name} className="w-[80px] h-[80px]" />
            <div className='item-details flex flex-col m-4'>
                <span className='name product text-xl'>{name}</span>
                <span className='price text-xl'>
                    {quantity} x <span className="product text-xl">${price}</span>
                </span>
            </div>
        </div>
    )
}

export default CartItem;