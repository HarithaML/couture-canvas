import React from "react";

import {useSelector} from "react-redux";


import Product from "./Product";
import SeeMoreProduct from "./SeeMoreProduct";
import {selectCategoriesMap} from "../../store/category/CategorySelector";

const Categories = () => {
    const categoriesMap = useSelector(selectCategoriesMap);


    // Check if categoriesMap exists before mapping over it
    if (!categoriesMap) {

        return <p>Loading...</p>; // You can customize the loading message or use a loader component
    }

    return (
        <div className=" m-8 ">
            {Object.keys(categoriesMap).map((title) => (
                <div key={title} className="flex flex-col  ">
                    <div>
                        <span className="cart-title text-6xl text-white">{title}</span>
                    </div>
                    <div className="flex flex-row   overflow-y-auto">
                        {categoriesMap[title].slice(0, 4).map((product) => (
                            <Product key={product.id} product={product}/>))}
                        <SeeMoreProduct title={title}/>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Categories;
