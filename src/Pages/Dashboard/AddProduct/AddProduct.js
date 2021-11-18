import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
    const {register,handleSubmit,reset} = useForm();

    const onSubmit = data => 
  {
    console.log(data);
    axios.post('https://fierce-journey-47025.herokuapp.com/products',data)
    .then(res => {
        console.log(res);
        // console.log(res.data.insertId);
        if(res.data.insertedId){
            alert('Inserted successfully');
            reset();
        }
    })

  }
    return (
        <div>
            <h1>Add a Product:</h1>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input  {...register("Price")} placeholder="Price" />
                <input {...register("img")}  placeholder="Image"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;