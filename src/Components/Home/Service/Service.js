import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, location, description, img, _id , price} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Location: {location}</h5>
            <h5>Price : ${price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/book/${_id}`}>
            <button className='btn btn-warning text-white mb-3'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;