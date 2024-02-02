import React, {useContext} from "react";
import {Trash} from 'tabler-icons-react';
import {CirclePlus} from 'tabler-icons-react';
import {CircleMinus} from 'tabler-icons-react';
import {CartContext} from "../../contexts/Cart";

const CartItem = ({cartItem}) => {
    const {addItemToCart, removeItemFromCart, removeItemTotallyFromCart} = useContext(CartContext);
    const {imageUrl, price, name, quantity} = cartItem;
    const handleAdd = () => addItemToCart(cartItem);
    const handleRemove = () => removeItemFromCart(cartItem);
    const handleTotalRemove = () => removeItemTotallyFromCart(cartItem);
    return (

        <div className="grid grid-cols-5 gap-2 mt-4 mb-4 items-center justify-center">
            <img src={imageUrl} alt={name} className="w-[100px] h-[100px] rounded-[100px] overflow-hidden"/>
            <span className=' product text-4xl'>{name}</span>
            <div className="flex flex-row items-center justify-center">
                <CircleMinus
                    size={48}
                    strokeWidth={2}
                    color={'black'}
                    onClick={handleRemove}
                />
                <span className='product text-4xl'>
                    {quantity}
                </span>
                <CirclePlus
                    size={48}
                    strokeWidth={2}
                    color={'black'}
                    onClick={handleAdd}
                />

            </div>

            <span className="product text-4xl">${price}</span>
            <Trash
                size={40}
                strokeWidth={2}
                color={'black'}
                onClick={handleTotalRemove}
            />

        </div>
    )
}

export default CartItem;