import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './Purchase.css';

const Purchase = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
// console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
         .then(res => res.json())
         .then(data =>setProduct(data))

    },[])  
    
    const onSubmit = (data) => {
        const getOrder = product;
        console.log(getOrder);

        data.order = getOrder;

       console.log(data);

            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        alert('Order processed Successfully');
                        
                        reset();
                    }
                    console.log(result);
                })

    }
    return (
        <div>
            <Header></Header>
             <h1>Buy a Product: </h1>
            <h1>Deatils of : {product.name} </h1>
            <p>Description: {product.description}</p>
            <img src={product.img} alt="" />

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name", { required: true })} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input placeholder="Status" defaultValue="pending" {...register("status")} />

                <input type="submit" />
            </form>
            
        </div>
    );
};

export default Purchase;