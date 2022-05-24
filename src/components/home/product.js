import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ 
     name, 
     price,
     image,
     handlePick,
     index
    }) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <img src={image}/>
            <Link 
               to="/singleItem"
               onClick={() => handlePick(index)}
               >Buy Now</Link>
        </div>
    )
}

export default Product;