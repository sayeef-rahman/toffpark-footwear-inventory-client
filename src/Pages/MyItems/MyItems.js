import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useWearhouse from '../../hooks/useWearhouse/useWearhouse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './MyItems.css'

const MyItems = () => {
    const [shoes, setShoes] = useWearhouse();
    const [shoe, setShoe] = useState({});
    // const [userShoes, setUserShoes] = useState({});
    const [user] = useAuthState(auth);
    const userEmail = user.providerData[0].email;
    const { _id } = shoe;
    var userShoes = [];

    shoes.map(shoe => {
        if (shoe.email == userEmail) {
            userShoes.push(shoe);
        }
        else {
            return
        }
    })

    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }

    // Delete Single Shoe
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sleepy-chamber-78225.herokuapp.com/wearhouse/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = shoes.filter(shoe => shoe._id !== _id);
                    setShoes(remaining);
                })
        }
    }




    return (
        <div className='text-center'>
            <h2 className='my-5'>Total Inventory Items : {shoes.length}</h2>
            <h2 className='my-5'>My Items : {userShoes.length}</h2>
            <div className='table-container' style={{ textAlign: 'center' }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userShoes.map(shoe => <tr
                                key={shoe._id}
                            >
                                <td><img src={shoe.img} alt="" className='rounded float-start table-image' /></td>
                                <td><span>{shoe.name}</span></td>
                                <td><span>{shoe.quantity}</span></td>
                                <td><span>{shoe.price}</span></td>
                                <td>
                                    <div className='btn-container'>
                                        <button onClick={() => navigateToProductDetail(shoe._id)} className='btn btn-primary m-2'>
                                            <span className='px-2' >Edit</span>
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button onClick={() => handleDelete(shoe._id)} className='btn btn-danger'>
                                            <span className='px-2'>Delete</span>
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyItems;