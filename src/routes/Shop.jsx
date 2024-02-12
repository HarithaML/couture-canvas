import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Categories from "../components/shop/Categories";
import Category from "./Category";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../store/category/CategoryAction";
import {getCategoriesAndDocuments} from "../utils/Firebase";


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            dispatch(setCategoriesMap(categoryMap));
        };

        getCategoriesMap();
    }, []);

    return(

    <Routes>
        <Route index element={<Categories />} />
        <Route path=':category' element={<Category />} />
    </Routes>
    )
};

export default Shop;
