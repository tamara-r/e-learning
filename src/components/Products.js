import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProductCard from './ProductCard';

const Products = ({ products }) => {

  const product = products.map((product, index) => {
    return (
      <div 
        style={{margin: '30px 60px 0 60px'}} 
        key={`${product.id}--${index}`}>
        <ProductCard product={product} key={product.id}/>
      </div>
      
    );
  })

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 1, sm: 3, md: 3 }}
        columns={{ xs: 12, sm: 8, md: 12}}
      >
        
        {products && product}
      </Grid>
    </Box>
  );
};

export default Products;
