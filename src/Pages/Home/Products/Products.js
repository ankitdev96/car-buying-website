import React,{ useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Product from '../Product/Product';
import { Grid } from '@mui/material';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fierce-journey-47025.herokuapp.com/products')
            .then(res=>res.json())
            .then(data =>setProducts(data));
    },[])
    return (
        <div>
            <Container >
            <h1>Our Products</h1>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                 products.slice(0,6).map(product =>
                    <Product key={product._id}
                    product={product}></Product>
                )

            }
            </Grid>
            </Container>
            
           

            
        
        </div>
    );
};

export default Products;