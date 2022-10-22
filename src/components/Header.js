/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Badge,
  Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { deepPurple } from '@mui/material/colors';

import SearchBar from './SearchBar';

const Header = ({ onChange }) => {

  const { cartItems } = useSelector((state) => state.cart);

  const currentPath = window.location.pathname


  return (
    <Fragment>

    
    <AppBar 
      component={'nav'} 
      sx={{ bgcolor: deepPurple[500] }} 
      className='animation-header__background'>
      
        <Toolbar 
          sx={{ justifyContent: 'space-between'}}>
          <Link to={'/'} style={{ color: 'white'}} className='text-orange'>
            <Typography style={{ fontSize: '18px' }}>CodeSkillSchool</Typography>
          </Link>
          {currentPath === '/' ? <SearchBar onChange={onChange}/> : null }
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/cart'} style={{ color: 'white'}} className='text-orange'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2, flexDirection: 'end' }} >
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            <Typography sx={{ pt: 1.5 }}>
              {cartItems
                .reduce((acc, item) => acc + 1 * item.price, 0)
                .toFixed(2)}{' '} $
            </Typography>
          </Box>
        </Toolbar>
      
    </AppBar>
    </Fragment>
  );
};

export default Header;
