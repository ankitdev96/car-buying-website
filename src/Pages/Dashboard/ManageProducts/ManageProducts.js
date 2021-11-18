import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        ,[]);

        const handleDelete = (id) => {
            const url = `http://localhost:5000/products/${id}`;
    
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    const remaining = products.filter(order => order._id !== id)
                    setProducts(remaining);
                    alert('Are You Wanted to delete?');
                }
            });
    
            
           
    
        }

    
    return (
        <div>
            <h1>All Products:{products.length}</h1>
           {
               products.map(product => 
                <div key={product._id}>
                    <h3>Product Name:{product.name}</h3>
                    <p>Product Price:{product.Price}</p>
                    <Button onClick={() => {
                            handleDelete(product._id)}}>Delete</Button>
                          
                        

                </div>

                )
           }
        </div>
    );
};

export default ManageProducts;