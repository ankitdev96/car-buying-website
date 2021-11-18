import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';

const Model = ({model}) => {
    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={model.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {model.name}
            </Typography>
            
            
          </CardContent>
        </CardActionArea>
        
      </Card>
      </Grid>
    );
};

export default Model;