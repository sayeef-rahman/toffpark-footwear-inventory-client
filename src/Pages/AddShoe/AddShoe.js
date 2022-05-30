import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddShoe = () => {
    const [user] = useAuthState(auth);
    const userEmail = user.providerData[0].email;
    // console.log(userEmail);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://sleepy-chamber-78225.herokuapp.com/wearhouse`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add New Shoe</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true, })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true, })} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity", { required: true, })} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplierName", { required: true, })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true, })} />

                <input className='mb-2' placeholder='User Email' type="text" value={userEmail} {...register("email", { required: true, })} />

                <input className='btn btn-primary' type="submit" value="Add Shoe" />
            </form>
        </div>
    );
};

export default AddShoe;