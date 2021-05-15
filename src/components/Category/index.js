import React from 'react';
import boyFashion from '../../assets/boyFashion.jpg';
import girlFashion from '../../assets/girlFashion.jpg';
import toys from '../../assets/toys.jpg';
import nursery from '../../assets/nursery.jpg';

import './styles.scss';

const ProductCategory = props =>{
    return (
        <div className="productscategory">
            <div className="wrap">
                <div className="item" style={{
                    backgroundImage: `url(${boyFashion})`
                }}>
                    <a>Boy Fashion</a>
                </div>

                <div className="item" style={{
                    backgroundImage: `url(${girlFashion})`
                }}>
                    <a>Girl Fashion</a>
                </div>

                <div className="item" style={{
                    backgroundImage: `url(${toys})`
                }}>
                    <a>Toys</a>
                </div>

                <div className="item" style={{
                    backgroundImage: `url(${nursery})`
                }}>
                    <a>Nursery</a>
                </div>

            </div>
        </div>
    )
}

export default ProductCategory;