import React from 'react';
import Contact from '../../Contact/Contact';
import Newsletter from '../../Newsletter/Newsletter';
import Aboutus from '../AboutUS/Aboutus';
// import About from '../../About/About';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <hr />
            <Contact></Contact>
            <Newsletter></Newsletter>
            <hr />
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;