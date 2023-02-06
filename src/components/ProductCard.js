import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { addToCart, removeItem } from '../redux/actions/cartActions';

import Button from './Button';
import Ratings from './Ratings';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  // const { soldItems } = useSelector((state) => state.sold);

  useEffect(() => {
  }, [dispatch]);


  const addItemToCart = () => {
    dispatch(addToCart(product.id));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  let itemId = cartItems.find(item => item.product === product.id)

  // let soldId = soldItems.find(item => item.product === product.id)

  return (
    <Card sx={{ width: 345, minHeight: 420, mb: 5 }}>
        <CardActionArea>
          <Link to={`/product/${product.id}`}>

            <CardMedia
              component="img"
              height="140"
              image={product.images[0].url}
              alt="product"
              sx={{ objectFit: 'contain', mt: 5 }} />

          </Link>
          <CardContent>

            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center" }}>
              <Link
                to={`/product/${product.id}`}
                style={{color: deepPurple[500]}}>{product.name}</Link>
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ textAlign: "center" }}>
              { product.teacher }
            </Typography>

            <Typography sx={{ textAlign: "center", mt: 2, ml: 3 }} >
              <Ratings
                value={product.ratings}
                size="medium"
                justifyContent={'center'} />
            </Typography>

            <Typography
              sx={{ textAlign: "center", fontSize: '24px', fontWeight: 'bold', color: '#000', mt: 1 }} >
              ${ product.price }
            </Typography>

            {
              itemId ? (
                <Typography
                  sx={{ textAlign: "center", mt: 2 }} >
                  {/* In cart {itemId.product} */}
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeItemFromCart(product.id)}
                  >
                    <RemoveShoppingCartIcon />
                  </Button>
                </Typography>
              ) : (

                <Typography
                  sx={{ textAlign: "center"}} >
                  <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={addItemToCart}
                    >
                      <AddShoppingCartIcon />
                    </Button>
                </Typography>
              )
            }

          </CardContent>
        </CardActionArea>
    </Card>
  );
};

export default ProductCard;
