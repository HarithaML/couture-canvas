import React from 'react';
import Product from './Product';



const Category = ({categories}) => {

    return (<div className='categories-container flex flex-row flex-wrap'>
            {categories.map(({id, title, imageUrl}) => (
                <Product key={id} id={id} title={title} imageUrl={imageUrl}/>))}
        </div>)


}

export default Category;