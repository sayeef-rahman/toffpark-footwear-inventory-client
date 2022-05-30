import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/banner/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img className='notFound-image' src={notFound}/>
            <button className='back-home'><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default NotFound;