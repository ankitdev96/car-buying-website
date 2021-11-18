import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res=>res.json())
            .then(data =>setReviews(data));
    },[])
    return (
        <div>
            <Container>
            <Typography variant="h5" component="h2">
            CUSTOMER REVIEWS

            </Typography>;
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                 reviews.map(review =>
                    <Review key={review._id}
                    review={review}></Review>
                )

            }
            </Grid>
            </Container>
            
           

            
        
        </div>
       
          
        
    );
};

export default Reviews;