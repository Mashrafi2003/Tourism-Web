import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/destinations')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div id='services'>
        <h2 className="text-primary mt-5">Tourism Places</h2>
        <div className="service-container">
            {
                services.map(service => <Service
                    _key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;