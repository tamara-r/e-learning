import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ADD_TO_SOLD
} from '../../constants/cartConstants';

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
      image: data[id].images[0],
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

export const addToSold = () => async (dispatch, getState) => {
  let items = []
  let sold = localStorage.setItem('soldItems', JSON.stringify(getState().cart.cartItems))
  let soldItems = structuredClone(sold)

  items = items.push(soldItems)

  dispatch({
    type: ADD_TO_SOLD,
    payload: items
  })
}
export const removeItems = () => async (dispatch, getState) => {

  dispatch({
    type: REMOVE_ALL_FROM_CART,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
