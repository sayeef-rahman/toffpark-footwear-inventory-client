import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <h3 className='text-center mt-5 mb-4'>Contact US</h3>
            <div className="right-side">
                <p>If there is any query please share with us. </p>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your number" />
                    </div>
                    <div className="input-box message-box">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className='btn btn-primary mt-3 px-4 py-2   '>SEND NOW</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;