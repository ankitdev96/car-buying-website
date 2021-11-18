import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={product.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h5" color="div">
              Price:{product.Price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/purchase/${product._id}`}>
            <Button size="small" color="primary">
              Purchase
            </Button>
          </Link>
        </CardActions>
      </Card>
      </Grid>
    );
};

export default Product;