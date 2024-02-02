import React from "react";
import {useContext} from "react";
import {CategoriesContext} from "../contexts/Categories"
import Product from "../components/shop/Product";

const Category = () => {
    const { categoriesMap,currentCategory } = useContext(CategoriesContext);

    // Check if categoriesMap exists before mapping over it
    if (!categoriesMap) {

        return <p>Loading...</p>; // You can customize the loading message or use a loader component
    }

    return (
        <div className=" m-8 ">


                    <div className="flex flex-col  ">
                        <div>
                            <span className="cart-title text-6xl text-white flex items-center justify-center">{currentCategory}</span>
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
