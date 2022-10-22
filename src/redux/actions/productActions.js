import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
} from '../../constants/productConstants';

import products from '../../data/products.json';

export const getAllProducts = () => (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });

    const response = JSON.stringify(products);
    const data = JSON.parse(response);

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: 'Something went wrong...',
    });
  }
};
