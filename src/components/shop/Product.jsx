import React, {useContext} from "react";
import {CartContext} from "../../contexts/Cart";

const Product = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    const handleClick = () =>
        addItemToCart(product);

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