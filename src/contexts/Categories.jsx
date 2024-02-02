import {createContext, useState,useEffect} from 'react';


import SHOP_DATA from '../utils/shop-data.js';
import {getCategoriesAndDocuments} from "../utils/Firebase";

export const CategoriesContext = createContext({
    categoriesMap: {},
    currentCategory: '',
    setCurrentCategory:() => {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [currentCategory,setCurrentCategory] = useState("");
    // useEffect(() => {
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // })

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])

    const value = {categoriesMap,currentCategory,setCurrentCategory};
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};