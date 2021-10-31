import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';

const AllOrder = () => {
    const {user} = useAuth()
    const [order , setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    const handleDelete = id =>{
    
        const proceed = window.confirm('Are You Sure You Want to Delete?')
        if(proceed){
            const url =  `http://localhost:5000/orders/${id}`
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
    const orders = order.filter(res=>res?.email=== user?.email)
    return (
        
        <div className='table'>
            <tr>
                    <th>Name</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th className='cancel'> Cancel Order</th>
            </tr>
            
           {
               orders.map(res=> <table>
                   <th>{res.name}</th>
                   <th>{res.destination}</th>
                   <th>{res.date}</th>
                   <th>{res.email}</th>
                   <th><button className='btn btn-warning' onClick={()=>{handleDelete(res._id)}}>Delete</button></th>
               </table>)
           }
     
       
        </div>
    );
};

export default AllOrder;