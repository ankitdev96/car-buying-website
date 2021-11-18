import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Alert } from '@mui/material';

const AddReview = () => {
    const {register,handleSubmit,reset} = useForm();

    const onSubmit = data => 
  {
    console.log(data);
    axios.post('https://fierce-journey-47025.herokuapp.com/review',data)
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
            <h1>Add A Review:</h1>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("review")} placeholder="Description" />
                <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rating" />
                <input {...register("img")}  placeholder="Customar Image"/>
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddReview;