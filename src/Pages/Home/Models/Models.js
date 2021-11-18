import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Product from '../Product/Product';
import { Grid } from '@mui/material';
import Model from '../Model/Model';

const Models = () => {
    const [models,setModels] = useState([]);

    useEffect(() => {
        fetch('https://fierce-journey-47025.herokuapp.com/models')
            .then(res=>res.json())
            .then(data =>setModels(data));
    },[])
    return (
        <div>
           
            <Container >
       
            <h1>Available Models.</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                 models.map(model =>
                    <Model key={model._id}
                    model={model}></Model>
                )

            }
            </Grid>
            </Container>



        </div>
    );
};

export default Models;