import React, { useContext, useState  } from 'react';
import { Link } from "react-router-dom";
import { ProductContext } from '../contexts/productContext';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} 
from 'react-icons/md';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} 
from "react-icons/hi";

const SingleItem = () => {

    const { products, pick } = useContext(ProductContext);

    const [ item, setItem ] = useState(pick);

    const { id, name, image, price, category, size, incart } = products[item];

    const handleIncrement = () => {
        setItem((item) => {
            item += 1;
            if ( item === products.length) {
                item = 0;
            }
            return item;
        })
    }

    
    const handleDecrement = () => {
        setItem((item) => {
            item -= 1;
            if ( item === -1) {
                item = products.length - 1;
            }
            return item;
        })
    }

    return (
        <section className='single-item'>
            <div className='item'>
              <img src={image}/>
              <div className='info'>
                  <div className='word-info'>
                      <div className='line'></div>
                      <h3>{size}<span>size</span></h3>
                      <h1>{name}Shoe</h1>
                      <h2>${price}</h2>
                      <div><span
                        onClick={() => handleDecrement()}
                      ><MdOutlineKeyboardArrowLeft className="arrow"/>
                        </span><span
                         onClick={() => handleIncrement()}
                        ><MdOutlineKeyboardArrowRight className="arrow"/></span>
                      </div>
                      <h4>Category: {category}</h4>
                  </div>

                  <button>
                      Add To Cart
                      <AiOutlineShoppingCart className='cart'/>
                  </button>
              </div>
            </div>
            <div className='arrow-link'>
                <div>
                    <Link to="/">
                        <HiOutlineArrowNarrowLeft className="narrow"/>
                    </Link>
                </div>
                <div>
                    <Link to="/cart">
                        <HiOutlineArrowNarrowRight className="narrow"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SingleItem;