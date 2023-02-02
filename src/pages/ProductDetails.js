import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Toolbar, Box, Grid, Divider } from '@mui/material';
import { Container } from '@mui/system';

import { getAllProducts } from '../redux/actions/productActions';
import { addToCart, removeItem } from '../redux/actions/cartActions';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ProductImages from '../components/ProductImages';
import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';
import Button from '../components/Button';
import MetaData from '../components/MetaData';
import ProductHeader from '../components/ProductHeader';
import CourseGoals from '../components/CourseGoals';
import CourseOverview from '../components/CourseOverview';

const ProductDetails = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, id, params]);


  const addItemToCart = () => {
    dispatch(addToCart(id));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  let findItem = cartItems.find(item => item.product === products[id].id)

  return (
    <Container sx={{ display: 'flex' }}>
      { products[id] && (
        <MetaData title={products[id].name} />
      )}
      <Header />
      <Box component="main" sx={{ p: 5 }}>
        <Toolbar />
        <Grid container >

          { products[id] && (
            <ProductHeader>{products[id].name}</ProductHeader>
          )}

          <Grid item xs={12} sm={6} md={6}>
            { products[id] && (
              <ProductImages srcMain={products[id].images[0].url} />
            )}
          </Grid>

          { products[id] && (

            <ProductDescription
              value={products[id].ratings}
              description={products[id].description}
              price={products[id].price}
              teacher={products[id].teacher}
            >
              <Grid item xs={12} sm={6} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 2 }}
                  onClick={addItemToCart}
                >
                  <AddShoppingCartIcon />
                </Button>
                {findItem && (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeItemFromCart(products[id].id)}
                  >
                    <RemoveShoppingCartIcon />
                  </Button>
                )}
              </Grid>
            </ProductDescription>

          )}

        </Grid>

        <Divider
          variant="fullWidth"
          sx={{ my: 3 }} />

        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            {products[id] && (
              <CourseGoals goals={products[id].goals} />
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {products[id] && (
              <CourseOverview lessons={products[id].lessons} />
            )}
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
};

export default ProductDetails;
