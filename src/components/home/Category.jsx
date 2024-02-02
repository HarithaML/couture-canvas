import React from 'react';

const Category = ({id, title, imageUrl}) => {
    return (<div
            key={id}
            className='category-container border-2 border-white  m-2 flex items-center justify-center w-[500px] h-[300px]'
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer'
            }}
        >
            <div
                className='category-body-container bg-opacity-60 hover:bg-opacity-80 bg-white border-2 border-white w-[200px] h-[100px] flex items-center justify-center flex-col'>
                <span className='category-title text-3xl text-black'>{title}</span>
                <p className='shop-now text-xl text-black'>Shop Now</p>
            </div>
        </div>);
};

export default Category;
