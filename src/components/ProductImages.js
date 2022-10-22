/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Grid } from '@mui/material';

const ProductImages = ({ srcMain }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <img
          src={srcMain}
          style={{ maxWidth: '100%', maxHeight: '55vh' }}
        />
      </Grid>
      
    </Grid>
  );
};

export default ProductImages;
