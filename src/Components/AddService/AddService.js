import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://dreadful-barrow-25745.herokuapp.com/destinations',{
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

    return (
        <div>
            <h3 className='text-align-left'>Add A New Item</h3>
            <form className='form-service' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}  placeholder='Name' required/>
      <input {...register("destination")}  placeholder='Destination' required/>
      <input {...register("location")}  placeholder='Location' required/>
      <input {...register("img")}  placeholder='Image URL' required/>
      {/* <input type="date" {...register("date" )} required/> */}
      <input type="number" {...register("price" )} required placeholder='Price'/>

      <input className='btn btn-warning' type="submit"/>
    </form>
        </div>
    );
};

export default AddService;