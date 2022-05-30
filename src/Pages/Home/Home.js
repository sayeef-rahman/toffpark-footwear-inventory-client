import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import HeroSection from './HeroSecion/HeroSection';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Items></Items>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;