import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useWearhouse from '../../hooks/useWearhouse/useWearhouse';
import './ProductDetail.css'

const ProductDetail = () => {
    const { productID } = useParams();
    const [shoes, setShoes] = useWearhouse();
    //https://sleepy-chamber-78225.herokuapp.com/wearhouse/626bc17e6d0ab0f9105c03b4
    const [shoe, setShoe] = useState({});
    const { name, _id, img, description, price, quantity, supplierName } = shoe;
    const oldQuantity = parseInt(quantity);
    useEffect(() => {
        const url = `https://sleepy-chamber-78225.herokuapp.com/wearhouse/${productID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setShoe(data));
    }, [])

    const navigate = useNavigate();
    const navigateToAddShoe = id => {
        navigate(`/addshoe`);
    }
    const navigateToUpdateQuantity = id => {
        navigate(`/updatequantity/${id}`);
    }

    //Delivered
    const handleDeliveded = () => {
        // event.preventDefault();
        // const quantityValue = event.target.quantity.value;
        const newQuantity = oldQuantity - 1;
        const setQuantity = { newQuantity }
        console.log("Input Quantity:", newQuantity);
        console.log("Product ID:", productID)

        // send data to the server
        const url = `https://sleepy-chamber-78225.herokuapp.com/wearhouse/${productID}`;
        console.log("Url: ", url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(setQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Sure to deliver this shoe?');
            })
    }

    return (
        <div className='w-75 mx-auto text-center'>
            <h2 className='m-3'>Manage Product</h2>
            <div className="card card-group text-center row main-card-container">
                <img className="card-image" src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <ul className="list-group list-group-flush p-0">
                        <li className="list-group-item">Price: {price}</li>
                        <li className="list-group-item">Quantity: {quantity}</li>
                        <li className="list-group-item">Supplier: {supplierName}</li>
                    </ul>
                    <div className="card-body">
                        <button className='btn btn-primary w-75' onClick={() => handleDeliveded(_id)}>Delivered</button>
                    </div>
                    <div className="card-body">
                        <button className='btn btn-primary w-75' onClick={() => navigateToUpdateQuantity(_id)}>Restock</button>
                    </div>
                    <div className="card-body">
                        <button className='btn btn-primary w-75' onClick={() => navigateToAddShoe()}>Add Shoe</button>
                    </div>
            </div>
        </div>
    );
};

export default ProductDetail;