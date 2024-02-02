import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../contexts/Categories";

import Product from "../components/shop/Product";
import SeeMoreProduct from "../components/shop/SeeMoreProduct";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    // Check if categoriesMap exists before mapping over it
    if (!categoriesMap) {

        return <p>Loading...</p>; // You can customize the loading message or use a loader component
    }

    return (
        <div className=" m-8 ">
            {Object.keys(categoriesMap).map((title)=>(
            <div className="flex flex-col  ">
                <div>
                    <span className="cart-title text-6xl text-white">{title}</span>
                </div>
                <div className="flex flex-row   overflow-y-auto">
                    {categoriesMap[title].slice(0,  4).map((product)=>(<Product key={product.id} product={product}/>))}
                    <SeeMoreProduct  title={title}/>
                </div>
            </div>
            ))}

        </div>
    );
};

export default Shop;
