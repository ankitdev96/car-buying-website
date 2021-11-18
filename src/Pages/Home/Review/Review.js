import { Button, CardActionArea, CardActions,Grid, Rating } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Review = ({review}) => {
    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={review.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {review.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {review.review}
            </Typography>
          </CardContent>
          <Rating name="size-large" defaultValue={review.rating} size="large" readOnly  />

        </CardActionArea>
        
      </Card>
      </Grid>
    );
};

export default Review;