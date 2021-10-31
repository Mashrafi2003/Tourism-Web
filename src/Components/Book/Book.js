import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Book.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../src/Hook/useAuth'
// import axios from 'axios';

const Book = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://dreadful-barrow-25745.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Order Processed')
                reset()
            }
        })

    };
    const { serviceId } = useParams();
    const [service , setService] = useState({})

    useEffect(()=>{
        fetch(`https://dreadful-barrow-25745.herokuapp.com/destinations/${serviceId}`)
        .then(res=>res.json())
        .then(data => setService(data))
    },[])
    
    return (
        <div className='book-container'>
          <div>
          <div class="card mb-4">
  <img src={service?.img} className='class="card-img-top"' alt="" />
  <div class="card-body">
    <h5 class="card-title"><span className='text-warning'> Place :</span> {service.name}</h5>   
    <h5 class="card-title"><span className='text-warning'>Location :</span> {service.location}</h5>   
    <h5 class="card-title"><span className='text-warning'>Price :</span> ${service.price}</h5>   
    <p class="card-text">{service.description}</p>
   
  </div>
</div>
          </div>
          {/* Form For User to Sybmit A Destination ticket */}
          
          <div className='submit-service'>
              <h2 className='text-secondary'>Submit To Continue</h2>
          <form className='form-service' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("destination", { required: true, maxLength: 20 })} value={service.name} required/>
      <input {...register("name")}  value={user.displayName || ''}  required/>
      <input {...register("email")}  value={user.email || ''} required/>
      <input type="date" {...register("date" )} required/>
      <input className='btn btn-warning' type="submit"/>
    </form>
          </div>
        </div>
    );
};

export default Book;