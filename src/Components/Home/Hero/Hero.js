import React from 'react';
import './Hero.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.jpg'
import banner2 from '../../../images/banner-2.jpg'
import banner3 from '../../../images/banner-3.jpg'

const Hero = () => {
    return (
        <div >
        <Carousel className='hero-container'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Find Your Happniess</h3>
                    <p>Enjoy The World and Its Beauty</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Explore New Places</h3>
                    <p>Our Experts will help you to find the best destination</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Earn and Gain</h3>
                    <p>Go and Find the unknown and Learn From it</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Hero;