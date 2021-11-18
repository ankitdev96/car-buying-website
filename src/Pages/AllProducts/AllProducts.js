import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fierce-journey-47025.herokuapp.com/products')
            .then(res=>res.json())
            .then(data =>setProducts(data));
    },[])
    return (
        <div>
            <Header></Header>
        <Container>
        <h1>Our Products</h1>
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
             products.map(product =>
                <Product key={product._id}
                product={product}></Product>
            )

        }
        </Grid>
        </Container>
        <Footer></Footer>
        
       

        
    
    </div>
    );
};

export default AllProducts;