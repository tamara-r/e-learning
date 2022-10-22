import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProductCard from './ProductCard';

const Products = ({ products }) => {

  return (
    <Box
      sx={{
        flexGrow: 1,
        ml: 'auto',
      }}
    >
      <Grid
        container
        spacing={{ xs: 1, sm: 3, md: 3 }}
        columns={{ xs: 12, sm: 8, md: 12}}
      >
        
        {products &&
          products.map((product) => {
            return (
              <div style={{margin: '20px'}}>
                <ProductCard product={product} key={product.id}/>
              </div>
              
            );
          })}
      </Grid>
    </Box>
  );
};

export default Products;
