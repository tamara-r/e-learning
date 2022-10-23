/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box } from '@mui/system';

export const CartFooter = () => {

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}>
      <img src='students.png' />
    </Box>
  )
}
