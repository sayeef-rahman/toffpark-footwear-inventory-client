import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateQuantity = () => {
    const { productID } = useParams();

    const [shoe, setShoe] = useState({});
    const { _id,quantity } = shoe;
    const oldQuantity= parseInt(quantity);
    console.log("old Quantity:", oldQuantity);

    useEffect(() => {
        const url = `https://sleepy-chamber-78225.herokuapp.com/wearhouse/${productID}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setShoe(data));
    }, [quantity]);

    //Handle Submit Quantity
    const handleUpdateQuantity = (event) =>{
        event.preventDefault();
        const quantityValue = event.target.quantity.value;
        const newQuantity =  oldQuantity + parseInt(quantityValue);
        const setQuantity = {newQuantity}
        console.log("Input Quantity:",newQuantity);
        console.log("Product ID:",productID)

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
        .then(data =>{
            console.log('success', data);
            alert('Sure to Update Quantity?');
            event.target.reset();
        })
    }
    return (
        <div className='text-center'>
            <h1 className='m-3'>Update Quantity</h1>
            <h4 className='m-2'>Current Quantity : {quantity}</h4>
            <h4 className='m-2'>Product ID : {_id}</h4>
            <div className='w-50 mx-auto'>
                <h2>Add Quantity</h2>
                <form onSubmit={handleUpdateQuantity}>
                    <input type="number" name="quantity" placeholder='quantity' required />
                    <input className='btn btn-primary mx-2' type="submit" value="Update Quantity" />
                </form>
            </div>
        </div>
    );
};

export default UpdateQuantity;