import React from 'react';
import Category from './Category';

const Categories = ({categories}) => {
return (
    <div className='categories-container flex flex-row flex-wrap'>
      {categories.map(({ id, title, imageUrl }) => (
           <Category key={id} id={id} title={title} imageUrl={imageUrl}/>
      ))}
    </div>
)


}

export default Categories;