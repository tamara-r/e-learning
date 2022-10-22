import React from 'react';
import { Button as ButtonUI } from '@mui/material';

const Button = ({ sx, color, children, onClick, variant, style }) => {
  return (
    <ButtonUI
      sx={sx}
      color={color}
      onClick={onClick}
      variant={variant}
      style={style}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
