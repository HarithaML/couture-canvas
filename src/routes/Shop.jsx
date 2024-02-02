import React from "react";
import {useContext} from "react";
import {ProductsContext} from '../contexts/Product'
import Product from "../components/shop/Product";

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className="flex flex-row flex-wrap overflow-y-auto">
            {products.map((product) => (<Product key={product.id} product={product}/>))}
        </div>
    )
}

export default Shop;