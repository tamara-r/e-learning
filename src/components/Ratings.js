import React, { useState } from 'react';
import { Grid, Typography, Rating } from '@mui/material';
import { orange } from '@mui/material/colors';

const Ratings = ({ value, size, justifyContent, fontSize }) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Grid container justifyContent={justifyContent}>
      <Grid
        item
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} >
        <Rating
          name="rating"
          precision={0.1}
          size={size}
          value={value}
          readOnly
          sx={{ bgColor: orange[600] }}
        />
      </Grid>

      <Grid item>
        {isHovering ? (
          <Typography  
            sx={{ color: orange[500], ml: 1, fontWeight: 'bold', fontSize: fontSize }}>
            { value }
          </Typography>
        ): (
          <Typography 
            sx={{ color: orange[500], ml: 1, fontWeight: 'bold', fontSize: fontSize, opacity: 0 }}>
            { value }
          </Typography>
        )
        }
      </Grid>

    </Grid>
    
  );
};

export default Ratings;
