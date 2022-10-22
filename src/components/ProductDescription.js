import React from 'react';
import { Grid, Typography } from '@mui/material';
import Ratings from './Ratings';

const ProductDescription = ({ description, price, children, value, teacher }) => {
  
  return (
    
    <Grid item xs={12} sm={5} md={5} sx={{ ml: 1.5 }}>

      <Typography sx={{mt:2}}>
        <Ratings 
          value={value} 
          size='large'
          fontSize={'18px'} 
          justifyContent={'flex-start'}/>    
      </Typography>

      <Typography 
        sx={{ my:2 ,fontSize: '20px', fontWeight: 'bold'}}
        component='p'>
        { teacher }   
      </Typography>


      <Typography  
        color="text.secondary"
        sx={{ mt: 2 }}>
        { description }
      </Typography>

      <Grid item sx={{ my: 3 , justifyContent: 'center'}}>
        <Typography variant="h3" gutterBottom>
          ${ price } 
        </Typography>
        { children } 
      </Grid>
      
    </Grid>
  );
};

export default ProductDescription;
