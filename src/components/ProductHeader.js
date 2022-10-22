import React from 'react';
import { Grid, Typography } from '@mui/material';

const ProductHeader = ({ children }) => {
  return (
    <Grid item sx={{ mb: 8 }} xs={12}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}> 
        { children }
      </Typography>
    </Grid>
  );
};

export default ProductHeader;
