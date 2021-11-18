import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {

    const[allOrders,setAllOrders] = useState([]);
    const { token,user } = useAuth();

    useEffect(
        ()=>{
            fetch('https://fierce-journey-47025.herokuapp.com/purchasedAll')
            .then(res => res.json())
            .then(data => setAllOrders(data));
        },[])

        const handleDelete = (id) => {
            const url = `https://fierce-journey-47025.herokuapp.com/purchased/${id}`;
    
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    const remaining = allOrders.filter(order => order._id !== id)
                    setAllOrders(remaining);
                    alert('Are You Wanted to delete?');
                }
            });
    
            
           
    
        }

        const handleStatus = (id) => {
            const url = 'https://fierce-journey-47025.herokuapp.com/purchasedAll/status';
    
            fetch(url, {
                method:'PUT',
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                   setAllOrders(data);
                    alert('Product Shipped');
                }
            });
    
            
           
    
        }
    


    return (
        <div>
            <h1>All Orders:{allOrders.length}</h1>
           {
               allOrders.map(order => 
                <div key={order._id}>
                <h3>Product Name:{order.order.name}</h3>
                <p>Customar Name:{order.name}</p>
                <p>Orders Status: {order.status}</p>
                <Button onClick={() => {
                            handleDelete(order._id)}}>Delete</Button>
                 <Button onClick={() => {
                            handleStatus(order._id)}}>Shipped</Button>

                </div>
               )
           } 


        </div>
    );
};

export default ManageOrders;