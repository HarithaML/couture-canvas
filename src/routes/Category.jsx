import React from "react";
import Product from "../components/shop/Product";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectCurrentCategory} from "../store/category/CategorySelector";

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const currentCategory = useSelector(selectCurrentCategory)

    // Check if categoriesMap exists before mapping over it
    if (!categoriesMap) {

        return <p>Loading...</p>; // You can customize the loading message or use a loader component
    }

    return (
        <div className=" m-8 ">


            <div className="flex flex-col  ">
                <div>
                    <span
                        className="cart-title text-6xl text-white flex items-center justify-center">{currentCategory}</span>
                </div>
                <div className="flex flex-row flex-wrap overflow-y-auto">
                    {categoriesMap[currentCategory].map((product) => (
                        <Product key={product.id} product={product}/>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Category;
