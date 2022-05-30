import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWearhouse from '../../../hooks/useWearhouse/useWearhouse';
import SingleShoe from '../SingleShoe/SingleShoe';
import './Items.css'

const Items = () => {
    const [shoes] = useWearhouse();
    const navigate = useNavigate();
    const navigateToAllProducts = () =>{
        navigate(`/allproducts`);
    }
    return (
        <div>
            <div id='shoes' className='container'>
                <h1 className='text-center mb-5 mt-5'>Inventory Items</h1>
                <div className='shoes-container'>
                    {
                        shoes.slice(0, 6).map(shoe => <SingleShoe
                            key={shoe._id}
                            shoe={shoe}
                        >
                        </SingleShoe>)
                    }
                </div>
            </div>
            <div className='text-center m-5'>
                <button onClick={()=>navigateToAllProducts()} type="button" className="btn btn-primary fw-bold"><h3 className='pt-2 px-3'>Manage Inventory</h3></button>
            </div>
        </div>
    );
};

/**
 * ImageBB Image direct links
 * https://i.ibb.co/xztqkbr/Superior-Leather-Casual-Shoe-8.jpg
 * https://i.ibb.co/7YPTrTW/Wild-Trend-Genuine-Leather-Casual-Shoe-1.jpg
 * https://i.ibb.co/ch7GNVp/British-Retro-Style-Casual-Shoe-Khaki-1.jpg
 * https://i.ibb.co/RjrzQ6j/British-Style-Business-Shoes-Black-Color.jpg
 * https://i.ibb.co/9tSwzG9/Lace-up-Leather-Business-Formal-Shoes-For-Men-1.jpg
 * https://i.ibb.co/3kFZ8c6/Low-Cut-Genuine-Leather-Casual-Shoe-Brown.jpg
 * https://i.ibb.co/CWLcg8F/Low-Cut-Genuine-Leather-Casual-Shoe-Sand.jpg
 * https://i.ibb.co/Khc7tmT/Original-Cow-Leather-Formal-Shoes.jpg
 * https://i.ibb.co/9gxv03Z/Stylish-Leather-Chelsea-Boot-6.jpg
 * https://i.ibb.co/fN0hzxG/Stylish-Leather-Chelsea-Boot-7.jpg
 */

export default Items;