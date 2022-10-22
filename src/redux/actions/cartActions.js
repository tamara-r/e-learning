import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/cartConstants';

import products from '../../data/products.json';

export const addToCart = (id) => async (dispatch, getState) => {
  const response = JSON.stringify(products);
  const data = JSON.parse(response);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data[id].id,
      name: data[id].name,
      price: data[id].price,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeItem = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
