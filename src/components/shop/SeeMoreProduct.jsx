import React from "react";

import {CirclePlus} from 'tabler-icons-react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentCategory} from "../../store/category/CategoryAction";

const SeeMoreProduct = ({title}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = () => {
        dispatch(setCurrentCategory(title));
        navigate(`:${title}`);
    }


    return (
        <div className="flex flex-col  m-2 items-center justify-center bg-[#BEE7E8] rounded-2xl p-4 w-[200px]">
            <CirclePlus
                size={48}
                strokeWidth={2}
                color={'black'}
                onClick={handleAdd}
            />
            <span className="cart-title text-4xl">See More</span>
        </div>
    )

}


export default SeeMoreProduct;