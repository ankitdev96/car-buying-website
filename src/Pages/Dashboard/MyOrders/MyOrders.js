import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
const MyOrders = () => {

    const [orders,setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://fierce-journey-47025.herokuapp.com/purchased?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
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
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining);
                alert('Are You Wanted to delete?');
            }
        });

        
       

    }

    return (
        <div>
             <h1>My Orders:{orders.length}</h1>
            {
                orders.map(order => 
                    <div key={order._id}>
                        <h3>{order.order.name}</h3>
                        <p>{order.order.description}</p>
                        <Button onClick={() => {
                            handleDelete(order._id)}}>Delete</Button>

                    </div>)
            }
        </div>
    );
};

export default MyOrders;