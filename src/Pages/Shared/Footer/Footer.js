import React from 'react';
import './Footer.css'
import brandLogo from '../../../images/tf_logo.png'
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className=" mt-4 py-3 bg-primary w-100">
            <footer
                className="text-center text-lg-start text-white"
            >
                <section
                    className="d-md-flex text-center justify-content-center align-items-center pt-4"
                >
                    <div className="me-5">
                        <h2 className='text-center mx-auto'><span>Get us on social networks:</span></h2>
                    </div>
                    <div className='d-md-flex justify-space-between text-center '>
                        <a href="https://toffpark.com/" className="text-white me-4">
                            <h2><i className="fab fa-facebook-f"></i></h2>
                        </a>
                        <a href="https://www.instagram.com/toffpark/?hl=en" className="text-white me-4">
                            <h2><i className="fab fa-instagram"></i></h2>
                        </a>

                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-4">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <img className='w-75 mb-3' src={brandLogo} alt="Toffpark Logo"/>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                />
                                <p>
                                Toffpark strives to provide the largest variety of footwear, clothing, and accessories at the best possible prices.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                />
                                <p>
                                    <a href="" className="text-white">Casual Shoes</a>
                                </p>
                                <p>
                                    <a href="" className="text-white">Formal Shoes</a>
                                </p>
                                <p>
                                    <a href="" className="text-white">Martin Boots</a>
                                </p>
                                <p>
                                    <a href="" className="text-white">Wallets</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="fw-bold">SUPPORT</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                />
                                <p>
                                    <a href="" className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a href="" className="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="" className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="" className="text-white">Help</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                />
                                <p><i className="fas fa-home mr-3"></i> House 15, Road 3, Block D, Section 6, Mirpur, Dhaka 1216</p>
                                <p><i className="fas fa-envelope mr-3"></i> support@toffpark.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +8801811877477</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-3"
                >
                    © {year} Copyright 
                    <a className="text-white" href="https://toffpark.com/"
                    > Toffpark</a
                    >
                </div>
            </footer>

        </div>
    );
};

export default Footer;