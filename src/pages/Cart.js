/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { 
  Toolbar,
  Box,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple } from '@mui/material/colors';

import { removeItem, removeItems } from '../redux/actions/cartActions';
import MetaData from '../components/MetaData';
import Header from '../components/Header';
import { CartFooter } from '../components/CartFooter';

const ColorButton = styled(Button) (({ theme }) => ({
  color: '#fff',
  backgroundColor: deepPurple[500],
  '&:hover': {
    backgroundColor: deepPurple[700],
  },
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));


const Cart = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
  
  }, [dispatch]);

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const handlePayment = () => {
    dispatch(removeItems());
    navigate("/");
    toast.success('Happy Learning!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  const item = cartItems.map(item => {
    return (
      <ListItem disablePadding key={item.product}>
        <ListItemIcon>
          <img src={item.image.url} style={{width: '36px', height: '36px'}} />
        </ListItemIcon>
        <ListItemText 
          primary={`${item.name} - $${item.price}`}
          sx={{ fontSize: '24px' }} />
        <ListItemButton onClick={() => removeItemFromCart(item.product)}>
          <ListItemIcon>
            <DeleteIcon fontSize='large' color='error'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    )
  })
  
  return (
    <Box 
      sx={{ display: 'flex', justifyContent: 'center' }} >
      <MetaData title={'Cart'} />
      <Header />

      { item.length > 0 ? (
        <Fragment>
          <Box
            component="main"
            xs={12}
            sm={6}
            md={6}
            sx={{
              py: 10,
            }}
          >
            <Toolbar />
            <List
              sx={{ width: '60%' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader 
                  component="div" 
                  id="nested-list-subheader"
                  sx={{fontSize: '24px', fontWeight: 'bold', padding: 0}}>
                Your Cart
                </ListSubheader> }>
                { item }
            </List>
      
          </Box>
          <Box
            component="main"
            xs={12}
            sm={6}
            md={6}
            sx={{
              pt: 10,
            }}>
            <Typography 
              sx={{ pt: 10, fontSize: '30px', fontWeight: 'bold' }}>
              Total Price
            </Typography>
            <Typography sx={{ pt: 2, fontSize: '24px', textAlign: 'center' }}>
              {cartItems
                .reduce((acc, item) => acc + 1 * item.price, 0)
                .toFixed(2)}{' '} $
            </Typography>
            <Typography sx={{ pt: 2, fontSize: '24px', textAlign: 'center' }}>
              <ColorButton onClick={handlePayment}>
                  Buy Now
              </ColorButton>
            </Typography>
          </Box>
          <CartFooter />
        </Fragment>
      )
      : (
        <Fragment>
          <Typography 
            sx={{ pt: 30, fontSize: '30px', fontWeight: 'bold' }}>
            Your Cart is Empty!
          </Typography>
          <CartFooter />
        </Fragment>
      )}
      
    </Box>
  )
}

export default Cart;
