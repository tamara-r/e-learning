import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import Ratings from './Ratings';

const ProductCard = ({ product }) => {

  return (
    <Card sx={{ width: 345, height: 360, mb: 5 }}>
      <Link to={`/product/${product.id}`}>
        <CardActionArea>

          <CardMedia
            component="img"
            height="140"
            image={product.images[0].url}
            alt="product"
            sx={{ objectFit: 'contain', mt: 5 }} />

          <CardContent>

            <Typography 
              gutterBottom 
              variant="h6" 
              sx={{ textAlign: "center" }}>
              <Link 
                to={`/product/${product.id}`}
                style={{color: deepPurple[500]}}>{product.name}</Link>
            </Typography>

            <Typography  
              color="text.secondary" 
              sx={{ textAlign: "center" }}>
              { product.teacher }
            </Typography>

            <Typography sx={{ textAlign: "center", mt: 2, ml: 3 }} >
              <Ratings 
                value={product.ratings} 
                size="medium"
                justifyContent={'center'} />
            </Typography>

            <Typography 
              sx={{ textAlign: "center", fontSize: '24px', fontWeight: 'bold', color: '#000' }} >
              ${ product.price }
            </Typography>

          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProductCard;
