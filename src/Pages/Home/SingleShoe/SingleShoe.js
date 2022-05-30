/**
 * Supplier Name
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleShoe = ({shoe}) => {
    const {name, _id,img, description, price, quantity, supplierName} = shoe;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div className='w-100 mx-auto'>
            <div className="card card-group text-center row">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <ul className="list-group list-group-flush p-0">
                        <li className="list-group-item">Price: {price} BDT</li>
                        <li className="list-group-item">Quantity: {quantity}</li>
                        <li className="list-group-item">Supplier: {supplierName}</li>
                    </ul>
            </div>
        </div>
    );
};

export default SingleShoe;