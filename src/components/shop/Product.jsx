import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/CartSelector";
import {addItemToCart} from "../../store/cart/CartAction";

const Product = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleClick = () =>
        dispatch(addItemToCart(cartItems, product));

    return (
        <div className="flex flex-col  m-2 items-center justify-center bg-[#BEE7E8] rounded-2xl p-4">
            <div className="w-[200px] h-[200px] rounded-[100px] overflow-hidden">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="product text-2xl">{name}</span>
            <span className="  text-3xl  product">${price}</span>
            <button className="bg-[#726DA8] p-2 rounded-xl" onClick={handleClick}>Add to Cart</button>
        </div>
    )

}


export default Product;