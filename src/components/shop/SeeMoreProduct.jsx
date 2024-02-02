import React, {useContext} from "react";
import {CategoriesContext} from "../../contexts/Categories";
import {CirclePlus} from 'tabler-icons-react';
import {useNavigate} from "react-router-dom";

const SeeMoreProduct = ({title}) => {
    const navigate = useNavigate();
    const {setCurrentCategory} = useContext(CategoriesContext);
    const handleAdd = ()=>{
        setCurrentCategory(title);
        navigate('/category')
    }


    return (
        <div className="flex flex-col  m-2 items-center justify-center bg-[#BEE7E8] rounded-2xl p-4 w-[200px]">
            <CirclePlus
                size={48}
                strokeWidth={2}
                color={'black'}
                onClick={handleAdd}
            />
            <span className="cart-title text-4xl" >See More</span>
        </div>
    )

}


export default SeeMoreProduct;