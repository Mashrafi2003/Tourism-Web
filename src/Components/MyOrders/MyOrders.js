import React, { useEffect, useState } from 'react';
import './MyOrder.css'
import useAuth from '../../../src/Hook/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [order , setOrder] = useState([])
    useEffect(()=>{
        fetch('https://dreadful-barrow-25745.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data =>setOrder(data))
    },[])
    const handleDelete = id =>{
    
        const proceed = window.confirm('Are You Sure You Want to Delete?')
        if(proceed){
            const url =  `https://dreadful-barrow-25745.herokuapp.com/orders/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(data=>{
                if(data.deletedCount === 1){
                    alert('Deleted Successfully')
                    const remainingOrders = order.filter(orders=>orders.email !== user.email);
                    setOrder(remainingOrders);
                }
              
            })
        }
    }


    
    
    return (
        <div className='table'>
        <h3>{user.email}</h3>
 <tr>
                    <th>Name</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th className='cancel'> Cancel Order</th>
                </tr>
     
         {
             order.map(res => <table>
               
                <tr>
                    <th>{res.name}</th>
                    <th>{res.destination}</th>
                    <th>{res.date}</th>
                    <th>{res.email}</th>
                    <th><button className='btn btn-warning' onClick={()=>{handleDelete(res._id)}}>Delete</button></th>
                </tr>
             </table>)
         }
     
        
        </div>
    );
};

export default MyOrders;