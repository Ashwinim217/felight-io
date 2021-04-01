import React from 'react';
import './category-item.style.scss';

const CategoryItem = ({id,title,imageUrl})=>(
    <div
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        className='category-item'>
        <div className='content-holder'>
            <h1 className='title'>{title.toUppperCase()}</h1>
            <span className='subtitle'>Know More</span>
        </div>
    </div>
);

export default CategoryItem;