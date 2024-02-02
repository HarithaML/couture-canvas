import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ShoppingBag} from 'tabler-icons-react';
import {CartContext} from '../../contexts/Cart';

const ShoppingCart = () => {
    const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext);

    const handleClick = () =>
        setIsCartOpen(!isCartOpen);

    return (

        <div className="nav-link relative " onClick={handleClick}>
            <ShoppingBag size={50} strokeWidth={2} color={'#FFFFFF'} className="mr-12"/>
            <span className='text-white absolute top-5 left-4 font-bold'>{cartItemCount}</span>
        </div>


    );
};

export default ShoppingCart;
